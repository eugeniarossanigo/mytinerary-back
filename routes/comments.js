var express = require('express');
var router = express.Router();
let passport = require('../config/passport')

const { createComment, readAllComments, readComment, deleteComment, updateComment } = require ('../controllers/commentController')

router.post('/', passport.authenticate('jwt',{session:false}), createComment)
router.get('/', readAllComments)
router.get('/:id', passport.authenticate('jwt', {session:false}), readComment)
router.delete('/:id', passport.authenticate('jwt', {session:false}), deleteComment)
router.patch('/:id', passport.authenticate('jwt', {session:false}), updateComment);

module.exports = router;