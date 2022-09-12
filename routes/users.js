var express = require('express');
var router = express.Router();

const { signUp, verifyMail, createUser } = require ('../controllers/userController')

router.post('/', signUp)
router.get('/verify/:code', verifyMail)

module.exports = router;