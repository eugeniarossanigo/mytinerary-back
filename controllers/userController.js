const User = require('../models/User');
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail');
const Joi = require ('joi')
const { string, date } = require('joi')
const jwt = require('jsonwebtoken')


const validator = Joi.object({
    name:Joi.string().min(3).message('INVALID_NAME_LENGTH'), 
    lastName:Joi.string().min(3).message('INVALID_LASTNAME_LENGTH'),
    mail:Joi.string().min(3).email().message('INVALID_EMAIL'),
    password:Joi.string().min(8).max(50).message('INVALID_PASSWORD'),
    photo:Joi.string().uri().message('INVALID_PHOTO_URI'),
    country:Joi.string(),
    role:Joi.string(),
    from:Joi.string()
})

const userController = {
    signUp: async (req, res) => {
        let { name, lastName, mail, password, photo, country, role, from } = req.body
        try {
            let result = await validator.validateAsync(req.body)
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
                    result = await validator.validateAsync({name, lastName, mail, photo, country, role, from})
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
                message: error.message,
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
                    message: "User doesn't exists, please sign up"
                })
            } else if (user.verified) {
                const checkPass = user.password.filter(passElement => bcryptjs.compareSync(password, passElement))
                if (from === 'form') {
                    if (checkPass.length > 0) {
                        user.logged = true
                        await user.save()

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            photo: user.photo
                        }
                        const token = jwt.sign({id: user._id, role: user.role}, process.env.KEY_JWT, {expiresIn: 60*60*24})

                        res.status(200).json({
                            success: true,
                            response: { user: loginUser, token: token },
                            message: 'Welcome' + user.name
                        })
                    } else {
                        res.status(400).json({
                            success: false,
                            message: 'Username or password incorrect'
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

    signInToken:(req, res) => {
        if (req.user !== null) {            
            res.status(200).json({
                success: true,
                response: { user: req.user },
                message: 'Welcome ' + req.user.name
            })
        } else {
            res.json({
                success: false,
                message: "sign in please!"
            }) 
        }
    },


    signOut: async(req, res) => {
        const { mail } = req.body

        try {
            let user = await User.findOne({ mail })
            if (user) {
                user.logged = false
                await user.save()
                res.status(200).json({
                    success: true,
                    message: 'Bye ' + user.name
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
    },
    readUsers: async (req, res) => {
        let query = {}
        if (req.query.mail) {
            query.mail = req.query.mail
        }
        try {
            let users = await User.find(query)
            if (users) {
                res.status(200).json({
                    message: 'you get the user',
                    response: users,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not find the user',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    }
}

module.exports = userController;