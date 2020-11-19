/**
 * This module contains validation and sanitiation middleware
 */
const { body } = require("express-validator");

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
    .withMessage("Email is required")
    .escape()
    .isEmail()
    .withMessage("Email is not a valid email address.")
    .normalizeEmail();
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
      .withMessage("Password must be minimum 8 characters long.");

  return base.escape();
};
