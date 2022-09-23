const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        min:4,
        max:100
    },
    province: {
        type: String, 
        required: true
    },
    country: {
        type: String, 
        required: true
    },
    photo: {
        type: String, 
        required: true,
        validate: function(value){
            if(!value.startsWith('http')){
                throw new Error('URL must start with http')
            }
        }
    },
    population: {
        type: Number, 
        required: true
    },
    fundation: {
        type: Date, 
        required: true
    },
    description: {
        type: String, 
        required: true
    }
})

const City = mongoose.model(
    'cities',
    citiesSchema
)

module.exports = City