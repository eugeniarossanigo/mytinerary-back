var express = require('express');
var router = express.Router();
// traerme el método con desestructuración
const {create, read} = require('../controllers/cityController')

// traerme el método con el objeto entero
// const citiesController = require('./controllers/cityController')
// const createController = citiesController.create

router.post('/', create)
router.get('/:id', read)
//localhost:4000/cities/

module.exports = router;
