const { validationResult } = require("express-validator");
const {
  UserNotFoundError,
  IncorrectPasswordError,
  UserAlreadyExistsError,
} = require("../core/errors");
const db = require("../core/database");
const {
  validateMimeTypes,
  validateFileSizes,
  saveProfilePicture,
  updateUser,
  verifyFilesExist,
} = require("./userSettingsController");

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
    res.locals.email = req.body.email;
    res.locals.password = req.body.password;
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
    res.locals.email = req.body.email;
    res.locals.password = req.body.password;
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

exports.catchValidatorErrors = function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    res.locals.errorMessage = errors.array()[0];
    res.locals.email = req.body.email;
    res.locals.password = req.body.password;
    res.locals.displayName = req.body.displayName;
    res.locals.page = 0;
    return res.nextApp.render(req, res, "/signup");
  }
  next();
};

exports.isRegistrationValid = async function (req, res, next) {
  try {
    const checks = [
      db.getUserByEmail(req.body.email),
      db.getUserByDisplayName(req.body.displayName),
    ];

    const [potentialUserEmail, potentialUserDisplayName] = await Promise.all(
      checks
    );

    //user already exists
    if (potentialUserEmail || potentialUserDisplayName) {
      res.locals.errorMessage = potentialUserEmail
        ? "Email is already in use."
        : "Display name is already in use";
      res.locals.email = req.body.email;
      res.locals.password = req.body.password;
      res.locals.displayName = req.body.displayName;
      res.locals.page = 0;
      return res.nextApp.render(req, res, "/signup");
    }

    next();
  } catch (e) {
    next(e);
  }
};

exports.profilePictureValidation = function (req, res, next) {
  const middlewares = [
    verifyFilesExist,
    validateMimeTypes,
    validateFileSizes,
    saveProfilePicture,
  ];
  const args = [
    ["profilePicture"],
    { profilePicture: "image" },
    { profilePicture: 5000000 },
    null,
  ];

  let valid = true;
  let error;
  if (req.files) {
    res.status = () => res;
    res.json = (err) => (error = err) && (valid = false);

    for (let i = 0; i < middlewares.length; i++) {
      if (args[i]) middlewares[i](args[i])(req, res, next);
      else middlewares[i](req, res, next);

      if (!valid) {
        res.locals.errorMessage = error.message;
        res.locals.email = req.body.email;
        res.locals.password = req.body.password;
        res.locals.displayName = req.body.displayName;
        res.locals.page = 1;

        return res.nextApp.render(req, res, "/signup");
      }
    }
  }
  next();
};

exports.saveAndUpdateProfilePicture = async function (req, res, next) {
  if (req.files) {
    let valid = true;
    let error;
    res.status = () => res;
    res.json = (err) => (error = err) && (valid = false);

    saveProfilePicture(req, res, next);
    await updateUser({ profilePic: "profilePicFileName" })(req, res, next);
    if (!valid) {
      res.locals.errorMessage = error.message;
      res.locals.email = req.body.email;
      res.locals.password = req.body.password;
      res.locals.displayName = req.body.displayName;
      res.locals.page = 0;

      return res.nextApp.render(req, res, "/signup");
    }
  }
  next();
};

exports.signupPost = async function (req, res, next) {
  debug("POST /signup");
  debug(`session id: ${req.sessionID}`);
  const errors = validationResult(req);
  //errors during validation/sanitization middlware
  if (!errors.isEmpty()) {
    res.locals.error = errors.array()[0];
    res.locals.email = req.body.email;
    res.locals.password = req.body.password;
    res.locals.displayName = req.body.displayName;
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
      res.locals.email = req.body.email;
      res.locals.password = req.body.password;
      res.locals.displayName = req.body.displayName;
      return res.nextApp.render(req, res, "/signup");
    }
    await db.addUser(req.body.email, req.body.password, req.body.displayName);
    debug(`${req.body.email} added, about to authenticate`);

    next();
  } catch (e) {
    next(e);
  }
};
