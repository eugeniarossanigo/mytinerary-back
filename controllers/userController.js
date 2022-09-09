const User = require('../models/User');

const userController = {
    createUser: async (req, res) => {
        try {
            let user = await new User(req.body).save()
            res.status(201).json({
                message: 'user created',
                response: user,
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'could not create user',
                success: false
            })
        }
    }
}
module.exports = userController;
