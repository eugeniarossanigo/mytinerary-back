const City = require('../models/City')

const cityController = {
    createCity: async (req, res) => {
        // const {city, country, photo, population, fundation, description} = req.body
        // req.body tiene todas las variables que necesito
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
    readSome: async (req, res) => {
        let cities
        try {
            let regexp = new RegExp("^"+ req.query.city)
            cities = await City.find({city: {$regex: regexp}})
            res.json(cities)
        } catch (err) {
            console.log(err)
            res.status(500).json()
        }
    },
    readAll: async (req, res) => {
        let cities
        let query = {}
        if (req.query.population) {
            query.population = req.query.population
        }
        if (req.query.country) {
            query.country = req.query.country
        }
        try {
            let cities = await City.find()
            if (cities) {
                res.status(200).json({
                    message: 'you get all the cities',
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
        const city = req.body.data
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


// {
//     "city": "Rosario",
//     "country": "Argentina",
//     "photo": "asdasdasdsad.jpg",
//     "population": 1000000,
//     "fundation": "1950-12-12",
//     "description": "hola"
//     }