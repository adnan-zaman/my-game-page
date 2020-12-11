const express = require("express");

//middleware and controllers
const userController = require("../controllers/userController");
const passport = require("passport");

const debug = require("debug")("user");

const router = express.Router();

router.get("/:id", userController.getUserPage);

module.exports = router;
