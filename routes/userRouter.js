const express = require("express");

//middleware and controllers
const userController = require("../controllers/userController");
const userSettingsController = require("../controllers/userSettingsController");
const {
  passwordValidator,
  catchValidatorErrors,
  displayNameValidator,
} = require("../middleware/validators");
const passport = require("passport");

const debug = require("debug")("mygamepage-user");

const router = express.Router();

router.get("/settings", userSettingsController.getUserSettings);

router.put(
  "/settings/profile-picture/:userId",
  userSettingsController.checkAuthentication,
  userSettingsController.validateUserId,
  userSettingsController.verifyFilesExist(["profilePicture"]),
  userSettingsController.validateMimeTypes({ profilePicture: "image" }),
  userSettingsController.validateFileSizes({ profilePicture: 5000000 }),
  userSettingsController.saveProfilePicture,
  userSettingsController.updateProfilePicInDatabase,
  userSettingsController.sendSuccessMessage("OK")
);

router.put(
  "/settings/password/:userId",
  passwordValidator(true, "oldPassword"),
  passwordValidator(true, "newPassword1"),
  passwordValidator(true, "newPassword2"),
  catchValidatorErrors(),
  userSettingsController.verifyOldPassword,
  userSettingsController.verifyNewPassword,
  userSettingsController.updateUser({ password: "newPassword1" }),
  userSettingsController.sendSuccessMessage("OK")
);

router.put(
  "/settings/display-name/:userId",
  displayNameValidator("newDisplayName"),
  catchValidatorErrors(),
  userSettingsController.checkDisplayNameAvailability,
  userSettingsController.updateUser({ displayName: "newDisplayName" }),
  userSettingsController.sendSuccessMessage("OK")
);

router.get("/:id", userController.getUserPage);

module.exports = router;
