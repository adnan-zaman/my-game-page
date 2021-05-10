const express = require("express");

//middleware and controllers
const userController = require("../controllers/userController");
const userSettingsController = require("../controllers/userSettingsController");
const {
  passwordValidator,
  catchValidatorErrors,
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

//check auth
//validate user id
//verify props exist (oldPassword, newPassword1, newPassword2)
//verify oldPassword is same in database
//verify newPass1 == newPass2
//update db
//send success msg
router.put(
  "/settings/password/:userId",
  passwordValidator(true, "oldPassword"),
  passwordValidator(true, "newPassword1"),
  passwordValidator(true, "newPassword2"),
  catchValidatorErrors(),
  userSettingsController.sendSuccessMessage("OK")
);

router.get("/:id", userController.getUserPage);

module.exports = router;
