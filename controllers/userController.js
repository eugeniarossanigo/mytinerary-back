const User = require('../models/User');
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')

const userController = {

    signUp: async(req, res) => {
        let {name, lastName, mail, password, photo, country, role, from} = req.body
        //from, logged, code
        try {
            let user = await User.findOne({mail})
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                if (from==='form') {
                    password = bcryptjs.hashSync(password,10) 
                    user = await new User({name, lastName, mail, password: [password], photo, country, role, from: [from], logged, verified, code}).save()
                    sendMail(mail,code)
                    res.status(201).json({
                        message: 'user signed up from form',
                        success: true
                    })
                } else {
                    verified = true
                    password = bcryptjs.hashSync(password,10) 
                    user = await new User({name, lastName, mail, password: [password], photo, country, role, from: [from], verified, logged, code}).save()
                    res.status(201).json({
                        message: 'user signed up from '+from,
                        success: true
                    })
                }
            } else {
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: 'user already signed up in '+from,
                        success: false
                    })
                } else {
                    user.from.push(from)
                    user.verified = true
                    user.password = bcryptjs.hashSync(password,10)
                    await user.save()
                    res.status(200).json({
                        message: 'user signed up from '+from,
                        success: false
                    })
                }
            }
        } catch(error) {
            console.log(error)
            res.status(400).json({
                message: "couldn't signed up",
                success: false
            })
        }
    },

    verifyMail: async(req, res) => {
        const {code} = req.params
        try {
            let user = await User.findOne({code: code})
            if (user) {
                user.verified = true
                await user.save()
                res.redirect(301, 'https://www.google.com')
                
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
    
    // signIn: async() => {},
    
    // signOut: async() => {},

    // createUser: async (req, res) => {
    //     try {
    //         let user = await new User(req.body).save()
    //         res.status(201).json({
    //             message: 'user created',
    //             response: user,
    //             success: true
    //         })
    //     } catch (error) {
    //         res.status(400).json({
    //             message: 'could not create user',
    //             success: false
    //         })
    //     }
    // }
}
module.exports = userController;
