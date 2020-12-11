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
  debug("GET /");
  debug(`session id: ${req.sessionID}`);

  if (req.isAuthenticated()) return res.redirect(`/user/${req.user.id}`);
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
  debug("GET /signup");
  debug(`session id: ${req.sessionID}`);
  if (req.isAuthenticated()) return res.redirect(`/user/${req.user.id}`);
  res.render("signup");
};

exports.signupPost = async function (req, res, next) {
  debug("POST /signup");
  debug(`session id: ${req.sessionID}`);
  const errors = validationResult(req);
  //errors during validation/sanitization middlware
  if (!errors.isEmpty()) {
    res.locals.error = errors.array()[0];
    res.locals.email_value = req.body.email;
    res.locals.password_value = req.body.password;
    return res.render("signup");
  }

  try {
    const conn = db.createConnection();
    const results = await conn.query("CALL GetUser(?)", [req.body.email]);
    const potentialUser = results[0][0];

    //user already exists
    if (potentialUser) {
      res.locals.error = new UserAlreadyExistsError();
      res.locals.email_value = req.body.email;
      res.locals.password_value = req.body.password;
      conn.end();
      return res.render("signup");
    }
    await conn.query("CALL AddUser(?,?)", [req.body.email, req.body.password]);
    debug(`${req.body.email} added, about to authenticate`);
    conn.end();
    next();
  } catch (e) {
    next(e);
  }
};
