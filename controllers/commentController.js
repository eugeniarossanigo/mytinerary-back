const Joi = require('joi');
const Comment = require('../models/Comment');

const validator = Joi.object({
    comment:Joi.string().max(300).message('INVALID_LENGTH'),
    user:Joi.string(),
    itinerary:Joi.string()
    
})

const commentController = {
    createComment: async (req, res) => {
        try {
            let result = await validator.validateAsync(req.body)
            let comment = await new Comment(req.body).save()
            res.status(201).json({
                message: 'Comment created',
                response: comment,
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'could not create comment',
                success: false
            })
        }
    },
    readAllComments: async (req, res) => {
        let query = {}
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }
        try {
            let comments = await Comment.find(query)
            .populate('user', {name:1})
            .populate('itinerary', {name:1, tags: 1})

            if (comments) {
                res.status(200).json({
                    message: 'you get the comments',
                    response: comments,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not find any comments',
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
    readComment: async (req,res) =>{
        const { id } = req.params
        try {
            let comment = await Comment.findOne({ _id: id })
            if (comment) {
                res.status(200).json({
                    message: 'you get the comment',
                    response: comment,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not find the comment',
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
module.exports = commentController;
