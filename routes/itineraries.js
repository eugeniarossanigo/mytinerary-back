var express = require('express');
var router = express.Router();

const { createItinerary, updateItinerary, deleteItinerary, readAllItineraries } = require ('../controllers/itineraryController')

router.post('/', createItinerary)
router.get('/', readAllItineraries)
router.put('/:id', updateItinerary)
router.delete('/:id', deleteItinerary)


module.exports = router;