const User = require('../models/User');
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail');

const userController = {

    signUp: async (req, res) => {
        let { name, lastName, mail, password, photo, country, role, from } = req.body
        //from, logged, code
        try {
            let user = await User.findOne({ mail })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                if (from === 'form') {
                    password = bcryptjs.hashSync(password, 10)
                    user = await new User({ name, lastName, mail, password: [password], photo, country, role, from: [from], logged, verified, code }).save()
                    sendMail(mail, code)
                    res.status(201).json({
                        message: 'user signed up from form',
                        success: true
                    })
                } else {
                    verified = true
                    password = bcryptjs.hashSync(password, 10)
                    user = await new User({ name, lastName, mail, password: [password], photo, country, role, from: [from], verified, logged, code }).save()
                    res.status(201).json({
                        message: 'user signed up from ' + from,
                        success: true
                    })
                }
            } else {
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: 'user already signed up in ' + from,
                        success: false
                    })
                } else {
                    user.from.push(from)
                    user.verified = true
                    user.password.push(bcryptjs.hashSync(password, 10))
                    await user.save()
                    res.status(201).json({
                        message: 'user signed up from ' + from,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "couldn't signed up",
                success: false
            })
        }
    },

    verifyMail: async (req, res) => {
        const { code } = req.params
        try {
            let user = await User.findOne({ code: code })
            if (user) {
                user.verified = true
                await user.save()
                res.redirect(301, 'http://my-tinerary-front-almosthacker.herokuapp.com/')
            } else {
                res.status(400).json({
                    message: "mail doesn't have account yet",
                    success: false
                })
            }
        } catch {
            console.log(error)
            res.status(400).json({
                message: "couldn't verify account",
                success: false
            })
        }
    },

    signIn: async (req, res) => {
        const { mail, password, from } = req.body
        try {
            const user = await User.findOne({ mail })
            if (!user) {
                res.status(404).json({
                    success: false,
                    menssage: "User doesn't exists, please sign up"
                })
            } else if (user.verified) {
                const checkPass = user.password.filter(passElement => bcryptjs.compareSync(password, passElement))
                if (from === 'form') {
                    if (checkPass.length > 0) {
                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }
                        user.logged = true
                        await user.save()

                        res.status(200).json({
                            success: true,
                            response: { user: loginUser },
                            menssage: 'Welcome' + user.name
                        })
                    } else {
                        res.status(400).json({
                            success: false,
                            menssage: 'Username or password incorrect'
                        })
                    }
                } else {
                    if (checkPass.length > 0) {
                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }
                        user.logged = true
                        await user.save()

                        res.status(200).json({
                            success: true,
                            response: { user: loginUser },
                            menssage: 'Welcome ' + user.name
                        })
                    } else {
                        res.status(400).json({
                            success: false,
                            menssage: 'Invalid credentials'
                        })
                    }
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Please, verify your email account and try again'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: 'Sign In ERROR, try again later'
            })
        }
    },

    signOut: async(req, res) => {
        const { id } = req.params
        // const { mail } = req.body

        try {
            let user = await User.findOne({ _id: id })
            if (user) {
                user.logged = false
                await user.save()
                res.status(200).json({
                    success: true,
                    menssage: 'Bye ' + user.name
                })
            } else {
                res.status(401).json({
                    success: false,
                    message: 'There is not user logged'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: 'Sign out ERROR, try again later'
            })

        }
    }
}

module.exports = userController;
