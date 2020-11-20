const passport = require("passport");

const { validationResult } = require("express-validator");
const { UserNotFoundError, IncorrectPasswordError } = require("../errors");

const debug = require("debug")("index");
const authDebug = require("debug")("passport");

exports.index_get = function (req, res) {
  debug("GET");
  debug(`session id: ${req.sessionID}`);
  debug(`isAuth: ${req.isAuthenticated()}`);
  debug(`user: ${req.user}`);
  if (req.isAuthenticated()) return res.redirect("/users");
  res.render("login");
};

exports.loginGet = function (req, res) {
  debug("GET");
  debug(`session id: ${req.sessionID}`);

  if (req.isAuthenticated()) return res.redirect("/users");
  res.render("login");
};

exports.loginFormErrorHandler = function (req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.locals.error = errors.array()[0];
    res.locals.email_value = req.body.email;
    res.locals.password_value = req.body.password;
    return res.render("login");
  }

  next();
};

exports.loginFail = function (err, req, res, next) {
  if (
    err instanceof UserNotFoundError ||
    err instanceof IncorrectPasswordError
  ) {
    res.locals.error = err;
    res.locals.email_value = req.body.email;
    res.locals.password_value = req.body.password;
    return res.render("login");
  }
  //non-usage related error
  return next(err);
};

exports.loginSuccess = function (req, res, next) {
  res.send("good");
};

exports.index_post = function (req, res, next) {
  debug(`POST`);
  debug(`session id: ${req.sessionID}`);

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      authDebug(`auth error: ${err.message}`);
      //error due to usage
      if (
        err instanceof UserNotFoundError ||
        err instanceof IncorrectPasswordError
      ) {
        res.locals.error = err;
        res.locals.email_value = req.body.email;
        res.locals.password_value = req.body.password;
        return res.render("login");
      }
      //non-usage related error
      return next(err);
    }
    req.login(user, (err) => {
      if (err) {
        authDebug(`login error: ${err.message}`);
        return next(err);
      }
      debug("redirecting to /users");
      res.redirect("/users");
    });
  })(req, res, next);
};

exports.signup_get = function (req, res, next) {
  res.render("signup");
};

exports.signup_post = function (req, res, next) {
  res.send("signup");
};
