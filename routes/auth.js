var express = require('express');
var router = express.Router();
let passport = require('../config/passport')
const { signUp, verifyMail, signIn, verifyToken, signOut, readUsers } = require ('../controllers/userController')

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/token', passport.authenticate('jwt', {session:false}), verifyToken);
router.get('/verify/:code', verifyMail);
router.post('/signout', signOut);
router.get('/', readUsers);

module.exports = router;