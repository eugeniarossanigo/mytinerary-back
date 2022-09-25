const Activity = require('../models/Activity');
const Joi = require ('joi')

const validator = Joi.object({
    name: Joi.string(),
    photo: Joi.string().uri().message('INVALID_URI'),
    itinerary: Joi.string(),
})

const activityController = {
    createActivity: async (req, res) => {
        try {
            let result = await validator.validateAsync(req.body)
            let activity = await new Activity(req.body).save()
            res.status(201).json({
                message: 'Activity created',
                response: activity,
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'could not create Activity',
                success: false
            })
        }
    },
    readAllActivities: async (req, res) => {
        let query = {}
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }
        try {
            let activities = await Activity.find(query)
            .populate('itinerary', {name:1, tags: 1})

            if (activities) {
                res.status(200).json({
                    message: 'you get the activities',
                    response: activities,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not find any activities',
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
    deleteActivity: async (req, res) => {
        const { id } = req.params
        let activity
        try {
            activity = await Activity.findOneAndDelete({ _id: id })
            if (activity) {
                res.status(200).json({
                    message: 'you have removed the activity',
                    response: activity,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not removed the activity',
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
module.exports = activityController;
