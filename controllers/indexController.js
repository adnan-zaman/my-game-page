const { validationResult } = require("express-validator");
const passport = require("passport");
const { UserNotFoundError, IncorrectPasswordError } = require("../errors");
const debug = require("debug")("index");
const authDebug = require("debug")("passport");

exports.index_get = function (req, res) {
  debug("GET");
  debug(`session id: ${req.sessionID}`);
  res.render("login.pug");
};

exports.index_post = function (req, res, next) {
  debug(`POST`);
  debug(`session id: ${req.sessionID}`);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.locals.error_msg = errors.array()[0].msg;
    res.locals.email_value = req.body.email;
    res.locals.password_value = req.body.password;
    return res.render("login");
  }

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      authDebug(`auth error: ${err.message}`);
      //error due to usage
      if (
        err instanceof UserNotFoundError ||
        err instanceof IncorrectPasswordError
      ) {
        res.locals.error_msg = err.message;
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
      res.locals.name = req.user.email;
      res.locals.password = req.user.password;
      res.render("success");
    });
  })(req, res, next);
};
