const Comment = require('../models/Comment');

const commentController = {
    createComment: async (req, res) => {
        try {
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
            let comments = await comment.find(query)
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
    updateComment: async (req, res) => {
        const { id } = req.params
        const itinerary = req.body
        try {
            let newComment = await Comment.findOneAndUpdate({ _id: id }, newComment, { new: true })
            if (newComment) {
                res.status(200).json({
                    message: 'you have updated the comment',
                    response: newComment,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'could not update the comment',
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
