const express = require("express");

//middleware and controllers
const userController = require("../controllers/userController");
const userSettingsController = require("../controllers/userSettingsController");
const passport = require("passport");

const debug = require("debug")("mygamepage-user");

const router = express.Router();

router.get("/settings", userSettingsController.getUserSettings);

router.post("/settings", (req, res) => {
  console.log(req.files);
  console.log(req.body.duder);
  req.files.profilePicture.mv("images.png");
  res.send("good");
});

router.get("/:id", userController.getUserPage);

module.exports = router;
