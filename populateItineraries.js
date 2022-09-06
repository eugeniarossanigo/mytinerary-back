require('dotenv').config();
const db = require('./config/database');
const Itinerary = require('./models/Itinerary')

Itinerary.create(
    {
        name: "paseo por bariloche",
        user: "631768650a4742aeb73f70f3",
        city: "631768d0c561b3f4a98d553c",
        price: 300,
        likes: [434],
        tags: ["travel"],
        duration: 2
    },
    {
        name: "paseo por bariloche",
        user: "631768650a4742aeb73f70f2",
        city: "631768d0c561b3f4a98d553c",
        price: 300,
        likes: [434],
        tags: ["travel"],
        duration: 2
    },
    {
        name: "paseo por la falda",
        user: "631768650a4742aeb73f70f3",
        city: "631768d0c561b3f4a98d5532",
        price: 1100,
        likes: [434],
        tags: ["travel"],
        duration: 3
    },
    {
        name: "paseo por la falda",
        user: "631768650a4742aeb73f70f2",
        city: "631768d0c561b3f4a98d5532",
        price: 1100,
        likes: [434],
        tags: ["travel"],
        duration: 3
    }
)