const express = require("express");
const indexController = require("../controllers/indexController");
const { body } = require("express-validator");
const router = express.Router();

router.get("/", indexController.index_get);
router.post(
  "/",
  [
    body("email")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Email is required")
      .escape()
      .isEmail()
      .withMessage("Email is not a valid email address")
      .normalizeEmail(),

    body("password")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .escape(),
  ],
  indexController.index_post
);

module.exports = router;

/**/
