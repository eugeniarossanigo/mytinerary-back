const Itinerary = require('../models/Itinerary');
const Joi = require ('joi')
const { string, date } = require('joi');
const { json } = require('express');


const validator = Joi.object({
    name:Joi.string(),
    user:Joi.string(), 
    city:Joi.string().min(3).message('INVALID_CITY_LENGTH'), 
    price:Joi.number().min(1000).message('INVALID_PRICE_NUMBER'),
    likes:Joi.array(),
    tags: Joi.array(),
    duration:Joi.number().min(1).message('INVALID_DURATION_NUMBER')
})

const itineraryController = {
    createItinerary: async (req, res) => {
        try {
            let result = await validator.validateAsync(req.body)
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Itinerary created',
                response: itinerary,
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
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
    },
    readAllItineraries: async (req, res) => {
        let query = {}
        if (req.query.city) {
            query.city = req.query.city
        }
        if (req.query.user) {
            query.user = req.query.user
        }
        try {
            let itineraries = await Itinerary.find(query)
            .populate('user', {name:1, lastName:1, photo:1})
            .populate('city', {city:1})

            if (itineraries) {
                res.status(200).json({
                    message: 'you get the itineraries',
                    response: itineraries,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not find any itineraries',
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
    readItinerary: async (req, res) => {
        const { id } = req.params
        try {
            let itinerary = await Itinerary.findOne({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    message: 'you get the itinerary',
                    response: itinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not find the itinerary',
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
    likeDislike: async (req,res) => {
        let { id } = req.params
        let userId = req.user.id

        try {
            let itinerary = await Itinerary.findOne({_id: id})
            console.log(itinerary.likes)
            if (itinerary && itinerary.likes.includes(userId)) {
                await Itinerary.findOneAndUpdate({_id: id}, {$pull: {likes: userId}}, {new:true})
                res.status(200).json({
                    message: "itinerary disliked",
                    success: true
                })
            } else if (itinerary && !itinerary.likes.includes(userId)) {
                await Itinerary.findOneAndUpdate({_id: id}, {$push: {likes: userId}}, {new:true})
                res.status(200).json({
                    message: "itinerary liked",
                    success: true
                })
            } else {
                res.status(400).json({
                    message: "itinerary not found",
                    success: true
                })
            }
        } catch(error) {
            console.log(error)
            res.json({
                message: "error",
                success: false
            })
        }
    }
    
}
module.exports = itineraryController;
