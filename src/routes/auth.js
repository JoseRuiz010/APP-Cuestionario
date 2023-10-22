const express = require('express');
const { login, getProfile } = require('../controller/authController');
const { customValidator, optionsValidation } = require('../utils/validation.express-validator');

const router = express.Router();

router.post('/login', customValidator(optionsValidation.auth), login);
router.get('/profile', getProfile);


module.exports = router