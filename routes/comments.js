var express = require('express');
var router = express.Router();

const { createComment, readAllComments } = require ('../controllers/commentController')

router.post('/', createComment)
router.get('/', readAllComments)

module.exports = router;