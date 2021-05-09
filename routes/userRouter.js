const express = require("express");

//middleware and controllers
const userController = require("../controllers/userController");
const userSettingsController = require("../controllers/userSettingsController");
const passport = require("passport");

const debug = require("debug")("mygamepage-user");

const router = express.Router();

router.get("/settings", userSettingsController.getUserSettings);

router.put(
  "/settings/:userId",
  userSettingsController.checkAuthentication,
  userSettingsController.validateUserId,
  userSettingsController.verifyFilesExist(["profilePicture"]),
  userSettingsController.validateMimeTypes({ profilePicture: "image" }),
  userSettingsController.validateFileSizes({ profilePicture: 5000000 }),
  userSettingsController.saveProfilePicture,
  userSettingsController.updateProfilePicInDatabase,
  userSettingsController.sendSuccessMessage("OK")
);

router.get("/:id", userController.getUserPage);

module.exports = router;
