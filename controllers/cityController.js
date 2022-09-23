const City = require('../models/City')
const Joi = require ('joi')
const { string, date } = require('joi')

const validator = Joi.object({
    city:Joi.string(),
    province:Joi.string(), 
    country:Joi.string(), 
    photo:Joi.string().uri().message('INVALID_URI'),
    population:Joi.number().integer().min(1000).max(100000000).message('INVALID_POPULATION_NUMBER'),
    fundation: Joi.date().less(new Date()).message('INVALID_FUNDATION_DATE'),
    description:Joi.string().max(2000).message('INVALID_DESCRIPTION_STRING')
})

const cityController = {
    createCity: async (req, res) => {
        try {
            let result = await validator.validateAsync(req.body)
            let city = await new City(req.body).save()
            res.status(201).json({
                message: 'city created',
                success: true,
                id : city._id
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    readCity: async (req, res) => {
        const { id } = req.params
        try {
            let city = await City.findOne({ _id: id })
            if (city) {
                res.status(200).json({
                    message: 'you get the city',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not find the city',
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
    },
    readAll: async (req, res) => {
        let query = {}
        if (req.query.city) {
            let regexp = new RegExp("^"+ req.query.city)
            query.city = {$regex: regexp, $options:'i'}
        }
        try {
            let cities = await City.find(query)
            if (cities) {
                res.status(200).json({
                    message: 'you get the cities',
                    response: cities,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not find any cities',
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
    },
    deleteCity: async (req, res) => {
        const { id } = req.params
        let city
        try {
            city = await City.findOneAndDelete({ _id: id })
            if (city) {
                res.status(200).json({
                    message: 'you have removed the city',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not removed the city',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: "error",
                success: false
            })
        }
    },
    updateCity: async (req, res) => {
        const { id } = req.params
        const city = req.body
        try {
            let newCity = await City.findOneAndUpdate({ _id: id }, city, { new: true })
            if (newCity) {
                res.status(200).json({
                    message: 'you have updated the city',
                    response: newCity,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not update the city',
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

module.exports = cityController
