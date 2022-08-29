const City = require('../models/City')

const cityController = {
    create: async(req, res) => {
        // const {city, country, photo, population, fundation, description} = req.body
        // req.body tiene todas las variables que necesito
        try {
            await new City(req.body).save()
            res.status(201).json({
                message: 'city created',
                success: true
            })
        } catch(error) {
            res.status(400).json({
                message: 'could not create city',
                success: false
            })
        }
    },
    read: async(req, res) => {
        const {id} = req.params
        try {
            let city = await City.findOne({_id:id})
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
        } catch(error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    }
}

module.exports = cityController