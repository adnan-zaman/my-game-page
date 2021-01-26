const express = require("express");
const router = express.Router();

const searchController = require("../controllers/searchController");
const updateFavesController = require("../controllers/updateFavoritesController");
const {
  queryValidator,
  pageValidator,
  intArrayValidator,
  catchValidatorErrors,
} = require("../middleware/validators");
const { validationResult } = require("express-validator");

let id = 1;
//all api requests use same headers, add convienience function to req
router.use((req, res, next) => {
  req.getApiHeaders = () => {
    return {
      Accept: "application/json",
      "Client-ID": process.env.clientid,
      Authorization: `Bearer ${process.env.accesstoken}`,
      TestId: id++,
    };
  };
  next();
});

router.get(
  "/search/:query/:page",
  queryValidator(),
  pageValidator(),
  searchController
);

router.put(
  "/favorites/:userId",
  (req, res, next) => {
    const id = Math.floor(Number(req.params.userId));
    if (isNaN(id))
      return status(400).json({ message: "userId must be an integer." });
    if (!req.user || req.user.id !== id)
      return res
        .status(401)
        .json({ message: "Need to establish session before usage." });
    next();
  },
  intArrayValidator(),
  catchValidatorErrors,
  updateFavesController.favoritesValidator,
  updateFavesController.checkGames,
  updateFavesController.addGames,
  updateFavesController.updateFavorites
);

module.exports = router;
