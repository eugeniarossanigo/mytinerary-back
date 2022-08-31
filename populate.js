require('dotenv').config();
const db = require('./config/database')
const City = require('../models/City')

for(let i = 0 ; i < 15; i++) {
City.create({
    city: "La falda",
    province: "Cordoba",
    country: "Argentina",
    photo: "fsdkfs",
    population: "40000",
    fundation: "1910",
    description: "sdashdias",
})
}
