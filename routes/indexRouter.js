const express = require("express");

//middleware and controllers
const indexController = require("../controllers/indexController");
const userSettingsController = require("../controllers/userSettingsController");
const validators = require("../middleware/validators");
const passport = require("passport");
const db = require("../core/database");
const debug = require("debug")("mygamepage-index");

const router = express.Router();

/* routes */
router.get("/", indexController.loginGet);
router.post(
  "/",
  validators.emailValidator(),
  validators.passwordValidator(),
  indexController.loginFormErrorHandler,
  passport.authenticate("local"),
  indexController.loginSuccess,
  indexController.loginFail
);

router.get("/signup", indexController.signupGet);

router.post(
  "/signup",
  validators.emailValidator(),
  validators.displayNameValidator(),
  validators.passwordValidator(true),
  indexController.catchValidatorErrors,
  indexController.isRegistrationValid,
  indexController.profilePictureValidation,
  //add user
  async (req, res, next) => {
    debug("adding");
    try {
      debug("really adding");
      await db.addUser(req.body.email, req.body.password, req.body.displayName);
      debug("added");
    } catch (e) {
      debug("failure");
      next(e);
    }
    next();
  },
  //req.user added
  passport.authenticate("local"),
  indexController.saveAndUpdateProfilePicture,
  (req, res) => {
    res.redirect(`/user/${req.user.id}`);
  }
);

router.get("/logout", (req, res) => {
  req.logOut();
  res.status(200).clearCookie("connect.sid", {
    path: "/",
  });
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
