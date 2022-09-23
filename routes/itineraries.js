var express = require('express');
var router = express.Router();
let passport = require('../config/passport')

const { createItinerary, updateItinerary, deleteItinerary, readAllItineraries, likeDislike} = require ('../controllers/itineraryController')

router.post('/', createItinerary)
router.get('/', readAllItineraries)
router.patch('/:id', updateItinerary)
router.delete('/:id', deleteItinerary)
router.patch('/likes/:id', passport.authenticate('jwt', {session:false}), likeDislike)

module.exports = router;