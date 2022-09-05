const Itinerary = require('../models/Itinerary');

const itineraryController = {
    createItinerary: async (req, res) => {
        try {
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Itinerary created',
                response: itinerary,
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'could not create Itinerary',
                success: false
            })
        }
    }
}
module.exports = itineraryController;
