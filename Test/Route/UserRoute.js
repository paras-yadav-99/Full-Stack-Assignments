const express = require("express");
const router = express();
const userController = require("../Controllers/UserControllers");

router.post("/posts", userController.posts);

router.get("/posts/:id/comments", userController.postid);

module.exports = router;