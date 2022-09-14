var express = require('express');
var router = express.Router();
const { signUp, verifyMail, signIn, signOut } = require ('../controllers/userController')

router.post('/signup', signUp);
router.get('/signin', signIn);
router.get('/verify/:code', verifyMail);
router.get('/signout/:id', signOut)

module.exports = router;