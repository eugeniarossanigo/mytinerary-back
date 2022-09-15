const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:4,
        max:20
    },
    lastName: {
        type: String,
        required: true,
        min:4,
        max:20
    },
    mail: {
        type: String, 
        required: true,
    },
    password: [{
        type: String,
        required: true
    }],
    photo: {
        type: String,
        required: true,
        validate: function(value){
            if(!value.startWith('http')){
                throw new Error('URL must start with http')
            }
        }
    },
    country: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        required: true
    },
    from: [{
        type: String, 
        required: true
    }],
    logged: {
        type: Boolean, 
        required: true
    },
    verified: {
        type: Boolean, 
        required: true
    },
    code: {
        type: String, 
        required: true
    }
})

const User = mongoose.model(
    'users',
    userSchema
)

module.exports = User