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
  (req, res) => {
    console.log("body is");
    console.log(req.body);
    console.log("files is ");
    console.log(req.files);
    return res.status(200);
  },
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
  req.logOut();
  res.status(200).clearCookie("connect.sid", {
    path: "/",
  });
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
