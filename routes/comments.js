var express = require('express');
var router = express.Router();
let passport = require('../config/passport')

const { createComment, readAllComments, readComment } = require ('../controllers/commentController')

router.post('/', passport.authenticate('jwt',{session:false}), createComment)
router.get('/', passport.authenticate('jwt', {session:false}), readAllComments)
router.get('/:id', passport.authenticate('jwt', {session:false}), readComment)

module.exports = router;