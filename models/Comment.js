const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    user: {type: String, required: true},
    itinerary: {type: String, required: true}
})

const Comment = mongoose.model(
    'comments',
    commentSchema
)

module.exports = Comment