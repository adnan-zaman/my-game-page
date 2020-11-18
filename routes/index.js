const express = require("express");
const indexController = require("../controllers/indexController");
const { body } = require("express-validator");
const router = express.Router();

const debug = require("debug")("index");

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
      .withMessage("Email is not a valid email address.")
      .normalizeEmail(),

    body("password")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Password is required.")
      .escape(),
  ],
  indexController.index_post
);

router.get("/users", (req, res) => {
  if (req.isUnauthenticated()) return res.redirect("/");
  res.locals.name = req.user.email;
  res.locals.password = req.user.password;
  res.render("success");
});

module.exports = router;
