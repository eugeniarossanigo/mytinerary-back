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
    }
}

module.exports = cityController