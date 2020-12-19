const { validationResult } = require("express-validator");
const {
  UserNotFoundError,
  IncorrectPasswordError,
  UserAlreadyExistsError,
} = require("../core/errors");
const db = require("../core/database");

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
    res.locals.displayName_value = req.body.displayName;
    return res.render("signup");
  }

  let conn;

  try {
    conn = db.createConnection();
    let results = await conn.query("CALL GetUserByEmail(?)", [req.body.email]);
    const potentialUserEmail = results[0][0];
    results = await conn.query("CALL GetUserByDisplayName(?)", [
      req.body.displayName,
    ]);
    const potentialUserDisplayName = results[0][0];

    //user already exists
    if (potentialUserEmail || potentialUserDisplayName) {
      res.locals.error = new UserAlreadyExistsError(
        potentialUserEmail ? "EMAIL" : "DISPLAYNAME"
      );
      res.locals.email_value = req.body.email;
      res.locals.password_value = req.body.password;
      res.locals.displayName_value = req.body.displayName;
      return res.render("signup");
    }
    await conn.query("CALL AddUser(?,?,?)", [
      req.body.email,
      req.body.password,
      req.body.displayName,
    ]);
    debug(`${req.body.email} added, about to authenticate`);

    next();
  } catch (e) {
    next(e);
  } finally {
    if (conn) conn.end();
  }
};
