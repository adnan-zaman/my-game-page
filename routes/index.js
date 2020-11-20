const express = require("express");

//middleware and controllers
const indexController = require("../controllers/indexController");
const validators = require("../middleware/validators");
const passport = require("passport");

const debug = require("debug")("index");

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

router.get("/signup", indexController.signup_get);
router.post(
  "/signup",
  validators.emailValidator(),
  validators.passwordValidator(true),
  indexController.signup_post
);

router.get("/users", (req, res) => {
  if (req.isUnauthenticated()) return res.redirect("/");
  res.locals.name = req.user.email;
  res.locals.password = req.user.password;
  res.render("success");
});

module.exports = router;
