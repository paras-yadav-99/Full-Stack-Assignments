const express = require('express');

const userController = require('../Controllers/User-controllers');


const router = express();

router.post("/signup",userController.signup);

router.post("/login",userController.login);

router.get("/search/email/:email",userController.getUserByEmail);

router.get("/search/id/:id",userController.getUserByID);

router.post("/postBlog",userController.postBlog);

router.get("/searchBlog/userId/:userId",userController.getUserByuserId);

module.exports = router;