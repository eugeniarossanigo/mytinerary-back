const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    photo: {
        type: String, 
        required: true,
        validate: function(value){
            if(!value.startsWith('http')){
                throw new Error('URL must start with http')
            }
        }
    },
    itinerary: {type: mongoose.Types.ObjectId, ref: 'itineraries', required: true}
})

const Activity = mongoose.model(
    'activities',
    activitySchema
)

module.exports = Activity