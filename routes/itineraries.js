var express = require('express');
var router = express.Router();
let passport = require('../config/passport')

const { createItinerary, updateItinerary, deleteItinerary, readAllItineraries, likeDislike, readItinerary} = require ('../controllers/itineraryController')

router.post('/', createItinerary)
router.get('/', readAllItineraries)
router.get('/:id', readItinerary)
router.put('/:id', updateItinerary)
router.delete('/:id', deleteItinerary)
router.patch('/like/:id', passport.authenticate('jwt', {session:false}), likeDislike)

module.exports = router;