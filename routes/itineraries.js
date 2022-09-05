var express = require('express');
var router = express.Router();

const { createItinerary,updateItinerary,deleteItinerary } = require ('../controllers/itineraryController')

router.post('/' , createItinerary)
router.put('/:id', updateItinerary)
router.delete('/:id', deleteItinerary)

module.exports = router;