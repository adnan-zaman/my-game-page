/**
 * This module contains validation and sanitiation middleware
 */
const { body, param } = require("express-validator");

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
 * @returns {ValidationChain}
 */
exports.displayNameValidator = function () {
  return body("displayName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Display name is required.")
    .escape()
    .isLength({ max: 20 })
    .withMessage("Display name is too long");
};

/**
 * Creates a validation/sanitization middleware for password input
 *
 * @param {boolean} signup true if password is being sent as part of signup
 * @returns {ValidationChain}
 */
exports.passwordValidator = function (signup = false) {
  let base = body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is required.");

  if (signup)
    base = base
      .isLength({ min: 8 })
      .withMessage("Password must be minimum 8 characters long.")
      .isLength({ max: 50 })
      .withMessage("Password is too long.");

  return base.escape();
};

/**
 * Creates a validation/sanitization middleware for game search queries
 *
 * @returns {ValidationChain}
 */
exports.queryValidator = function () {
  return param("query").escape();
};

/**
 * Creates a validation/sanitization middleware for page number
 * during game search queries
 *
 * @returns {ValidationChain}
 */
exports.pageValidator = function () {
  return param("page")
    .trim()
    .escape()
    .if((value, { req }) => !isNaN(Number(value)));
};
