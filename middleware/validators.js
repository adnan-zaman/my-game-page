/**
 * This module contains validation and sanitiation middleware
 */
const { body, param, query, validationResult } = require("express-validator");
const debug = require("debug")("mygamepage-validators");

/**
 * Creates a validation/sanitization middleware for email input
 *
 * @returns {ValidationChain}
 */
exports.emailValidator = function () {
  return body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email is required.")
    .escape()
    .isLength({ max: 50 })
    .withMessage("Email is too long")
    .isEmail()
    .withMessage("Email is not a valid email address.")
    .normalizeEmail();
};

/**
 * Creates a validation/sanitization middleware for display name input
 *
 * @param {string} fieldName name of field that is a password input
 * @returns {ValidationChain}
 */
exports.displayNameValidator = function (fieldName = "displayName") {
  return body(fieldName)
    .trim()
    .not()
    .isEmpty()
    .withMessage(`${fieldName} is required.`)
    .escape()
    .isLength({ max: 20 })
    .withMessage(`${fieldName} is too long. Max: 20 chars`);
};

/**
 * Creates a validation/sanitization middleware for password input
 *
 * @param {boolean} signup true if password is being sent as part of signup / changing password
 * @param {string} fieldName name of field that is a password input
 * @returns {ValidationChain}
 */
exports.passwordValidator = function (signup = false, fieldName = "password") {
  let base = body(fieldName)
    .trim()
    .not()
    .isEmpty()
    .withMessage(`${fieldName} is required.`);

  if (signup)
    base = base
      .isLength({ min: 8 })
      .withMessage(`${fieldName} must be minimum 8 characters long.`)
      .isLength({ max: 50 })
      .withMessage(`${fieldName} is too long.`);

  return base.escape();
};

/**
 * Creates a validation/sanitization middleware for search queries
 *
 * @param {string} location where in the request to check (param [default], query etc.)
 * @returns {ValidationChain}
 */
exports.queryValidator = function (location = "param") {
  const field = location === "param" ? param : query;
  return field("query").escape();
};

/**
 * Creates a validation/sanitization middleware for page number
 * @param {string} location where in the request to check (param [default], query etc.)
 * @returns {ValidationChain}
 */
exports.pageValidator = function (location = "param") {
  const field = location === "param" ? param : query;
  return field("page")
    .trim()
    .escape()
    .isInt({ min: 0 })
    .withMessage("Invalid page number.");
};

exports.intArrayValidator = function () {
  return body()
    .isArray()
    .withMessage("Request body must be an array.")
    .custom((arr) => {
      for (const i of arr) {
        const floored = Math.floor(i);
        if (isNaN(floored) || floored !== i)
          throw new Error("All elements of array must be integers.");
      }
      return true;
    });
};

/**
 * Creates a middleware that checks errors created by express validators.
 * Should be used after express validators. If there are errors,
 * will respond with the given status and method (json response or displaying webpage).
 * If there are no errors, will call next()
 *
 * @param {string} responseType how to respond to the error (json -> json response, page -> display error webpage)
 * @param {num} status error code
 *
 * @returns {function} express middleware
 */
exports.catchValidatorErrors = function (responseType = "json", status = 400) {
  return function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if (responseType === "json")
        return res.status(status).json(errors.array()[0].msg);
      else if ((responseType = "page")) {
        const err = errors.array()[0];
        err.status = status;
        return next(err);
      }
    }
    next();
  };
};
