const express = require("express");

//middleware and controllers
const indexController = require("../controllers/indexController");
const validators = require("../middleware/validators");
const passport = require("passport");

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
  indexController.signupPost,
  passport.authenticate("local"),
  (req, res) => {
    res.redirect(`/user/${req.user.id}`);
  }
);

router.get("/logout", (req, res) => {
  debug("its logout");
  debug(req.user);
  req.logOut();
  debug("clear those cookies");
  res.status(200).clearCookie("connect.sid", {
    path: "/",
  });
  debug("destroy?");

  req.session.destroy(function (err) {
    debug("back to lgon");
    res.redirect("/");
  });
});

module.exports = router;
