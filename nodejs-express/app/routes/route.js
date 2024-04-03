const express = require('express');
const router = express.Router();

const loginControll = require('../controllers/login.controll')
router.post('/login', loginControll.User);
router.get('/auth/google', loginControll.googleAuth);
router.get('/auth/google/callback', loginControll.googleAuthCallback);

module.exports = router;