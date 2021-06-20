const express = require('express');
const adminController = require('../Controllers/Admin-controllers');
const router = express();

router.post("/signup",adminController.signup);

router.post("/login",adminController.login);

module.exports = router;