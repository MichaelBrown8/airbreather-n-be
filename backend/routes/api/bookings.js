const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const { Spot, User, SpotImage, Review, sequelize } = require('../../db/models');

const router = express.Router();

// const validateSignup = [
//     check('email')
//         .exists({ checkFalsy: true })
//         .isEmail()
//         .withMessage('Please provide a valid email.'),
//     check('username')
//         .exists({ checkFalsy: true })
//         .isLength({ min: 4 })
//         .withMessage('Please provide a username with at least 4 characters.'),
//     check('username')
//         .not()
//         .isEmail()
//         .withMessage('Username cannot be an email.'),
//     check('password')
//         .exists({ checkFalsy: true })
//         .isLength({ min: 6 })
//         .withMessage('Password must be 6 characters or more.'),
//     handleValidationErrors
// ];


module.exports = router;
