const express = require('express');
const { signup, login, verify, forgotpassword, verifyotp, changepassword, getusers, editusers, deleteuser } = require('../Controllers/authController.js');

const router = express.Router();
const verifyToken = require('../Middlewares/AuthMiddleware.js')
 
router.post('/signup', signup);
router.post('/login', login);
// router.get('/verify', verify);
router.post('/forgotpassword', forgotpassword)
router.post('/verifyotp', verifyotp)
router.post('/changepassword', changepassword)
router.get('/getusers', verifyToken, getusers)
router.post('/editusers', verifyToken, editusers)
router.post('/deleteuser/:email', verifyToken, deleteuser)
 
module.exports = router;