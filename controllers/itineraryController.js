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
    },


    updateItinerary: async (req, res) => {
        const { id } = req.params
        const itinerary = req.body
        try {
            let newItinerary = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
            if (newItinerary) {
                res.status(200).json({
                    message: 'you have updated the itinerary',
                    response: newItinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not update the itinerary',
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
    deleteItinerary: async (req, res) => {
        const { id } = req.params
        let itinerary
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    message: 'you have removed the itinerary',
                    response: itinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not removed the itinerary',
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
    }
}
module.exports = itineraryController;
