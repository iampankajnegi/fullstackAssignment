const express = require('express');
const { validateRequest } = require("../Middleware/validateMiddleware.js")
const { saveUserDetails } = require('../controller/userController.js');

const router = express.Router();

router.post('/result', validateRequest, saveUserDetails);

module.exports = router;
