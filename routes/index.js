var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', {title: 'mytynerary'})
})


// router.use('/comments', cityRouter)

// router.get('/:id', function(req, res, next) {
//   if (req.params.id == 123){
//     return res.status(404).json()
//   }
//   res.json({
//     id : req.params.id
//   })
// });

module.exports = router;
