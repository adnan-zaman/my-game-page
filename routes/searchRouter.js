/*
Router for all routes related to searching within the app (e.g user search)
(searching for games is an api call and so is in the apiRouter)
*/

const express = require("express");
const router = express.Router();

const {
  pageValidator,
  queryValidator,
  catchValidatorErrors,
} = require("../middleware/validators");

const searchUserController = require("../controllers/searchUserController");

function isUserLoggedIn(req, res, next) {
  if (!req.user) {
    res.redirect("/");
  }
  next();
}

router.get(
  "/",
  isUserLoggedIn,
  pageValidator("query"),
  queryValidator("location"),
  catchValidatorErrors("page", 404),
  searchUserController
);

module.exports = router;
