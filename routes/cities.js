var express = require('express');
var router = express.Router();
// traerme el método con desestructuración
const {createCity, readCity, readAll, deleteCity, updateCity} = require('../controllers/cityController')

// traerme el método con el objeto entero
// const citiesController = require('./controllers/cityController')
// const createController = citiesController.create
// const readController = citiesController.read

router.post('/', createCity)
router.get('/all', readAll)
router.get('/:id', readCity)
router.delete('/:id', deleteCity)
router.put('/:id', updateCity)
//localhost:4000/cities/

module.exports = router;
