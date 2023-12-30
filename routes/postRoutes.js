const express = require("express");
const postControllers = require("./../controllers/postControllers");
const router = express.Router();

router.route("/").get(postControllers.getAllPosts);

module.exports = router;
