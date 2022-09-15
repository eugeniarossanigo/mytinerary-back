var express = require('express');
var router = express.Router();
const { signUp, verifyMail, signIn, signOut, readUsers } = require ('../controllers/userController')

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/verify/:code', verifyMail);
router.post('/signout', signOut)
router.get('/', readUsers)

module.exports = router;