const express = require('express');
const { login, getProfile } = require('../controller/authController');

const router = express.Router();

router.post('/login', login);
router.get('/profile', getProfile);


module.exports = router