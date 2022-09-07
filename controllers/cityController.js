const City = require('../models/City')

const cityController = {
    createCity: async (req, res) => {
        try {
            await new City(req.body).save()
            res.status(201).json({
                message: 'city created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'could not create city',
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
