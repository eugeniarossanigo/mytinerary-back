var express = require('express');
var router = express.Router();
const {createCity, readCity, readSome, readAll, deleteCity, updateCity} = require('../controllers/cityController')

router.post('/', createCity)
router.get('/', readAll)
router.get('/:id', readCity)
router.delete('/:id', deleteCity)
router.put('/:id', updateCity)

module.exports = router;
