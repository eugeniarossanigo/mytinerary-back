var express = require('express');
var router = express.Router();
let passport = require('../config/passport')
const { signUp, verifyMail, signIn, signOut, readUsers, signInToken } = require ('../controllers/userController')

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/verify/:code', verifyMail);
router.get('/token', passport.authenticate('jwt', {session:false}), signInToken)
router.post('/signout', signOut);
router.get('/', readUsers)

module.exports = router;