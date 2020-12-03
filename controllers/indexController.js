const { validationResult } = require("express-validator");
const {
  UserNotFoundError,
  IncorrectPasswordError,
  UserAlreadyExistsError,
} = require("../errors");
const db = require("../database");

const debug = require("debug")("index");
const authDebug = require("debug")("passport");

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

exports.signupGet = function (req, res, next) {
  res.render("signup");
};

exports.signupPost = function (req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.locals.error = errors.array()[0];
    res.locals.email_value = req.body.email;
    res.locals.password_value = req.body.password;
    return res.render("signup");
  }

  if (db.findByColumn("email", req.body.email)) {
    res.locals.error = new UserAlreadyExistsError();
    res.locals.email_value = req.body.email;
    res.locals.password_value = req.body.password;
    return res.render("signup");
  }

  db.add({ email: req.body.email, password: req.body.password });
  next();
};
