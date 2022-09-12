var express = require('express');
var router = express.Router();

const { signUp, verifyMail, createUser, signIn } = require ('../controllers/userController')

router.post('/', signUp);
router.get('/signin', signIn);
router.get('/verify/:code', verifyMail);

module.exports = router;