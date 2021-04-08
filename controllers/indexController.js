const { validationResult } = require("express-validator");
const {
  UserNotFoundError,
  IncorrectPasswordError,
  UserAlreadyExistsError,
} = require("../core/errors");
const db = require("../core/database");

const debug = require("debug")("mygamepage-index");
const authDebug = require("debug")("mygamepage-passport");

exports.loginGet = function (req, res) {
  debug("GET /");
  debug(`session id: ${req.sessionID}`);
  debug(req.user);

  if (req.isAuthenticated()) return res.redirect(`/user/${req.user.id}`);

  res.nextApp.render(req, res, "/login");
};

exports.loginFormErrorHandler = function (req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.locals.error = errors.array()[0];
    res.locals.email_value = req.body.email;
    res.locals.password_value = req.body.password;
    return res.nextApp.render(req, res, "/login");
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
    return res.nextApp.render(req, res, "/login");
  }
  //non-usage related error
  return next(err);
};

exports.loginSuccess = function (req, res, next) {
  res.redirect(`/user/${req.user.id}`);
};

exports.signupGet = function (req, res, next) {
  debug("GET /signup");
  debug(`session id: ${req.sessionID}`);
  if (req.isAuthenticated()) return res.redirect(`/user/${req.user.id}`);

  res.nextApp.render(req, res, "/signup");
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
    return res.nextApp.render(req, res, "/signup");
  }

  try {
    const potentialUserEmail = await db.getUserByEmail(req.body.email);
    const potentialUserDisplayName = await db.getUserByDisplayName(
      req.body.displayName
    );

    //user already exists
    if (potentialUserEmail || potentialUserDisplayName) {
      res.locals.error = new UserAlreadyExistsError(
        potentialUserEmail ? "EMAIL" : "DISPLAYNAME"
      );
      res.locals.email_value = req.body.email;
      res.locals.password_value = req.body.password;
      res.locals.displayName_value = req.body.displayName;
      return res.nextApp.render(req, res, "/signup");
    }
    await db.addUser(req.body.email, req.body.password, req.body.displayName);
    debug(`${req.body.email} added, about to authenticate`);

    next();
  } catch (e) {
    next(e);
  }
};
