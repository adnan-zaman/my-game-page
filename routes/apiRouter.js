const express = require("express");
const router = express.Router();

const getHeaders = require("../core/getHeaders");
const searchController = require("../controllers/searchController");
const updateFavesController = require("../controllers/updateFavoritesController");
const {
  queryValidator,
  pageValidator,
  intArrayValidator,
  catchValidatorErrors,
} = require("../middleware/validators");
const { validationResult } = require("express-validator");

router.use(getHeaders);

router.get(
  "/search/:query/:page",
  queryValidator(),
  pageValidator(),
  searchController
);

// router.put(
//   "/favorites/:userId",
//   (req, res, next) => {
//     console.log(req.body);
//     next();
//   },
//   intArrayValidator(),
//   catchValidatorErrors,
//   (req, res) => res.json("good")
// );

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
// router.put(
//   "/favorites/:userId",
//   auth(),
//   intArrayValidator(),
//   catchErrors(),
//   updateFavesController.favoritesValidator,
//   updateFavesController.checkGames,
//   updateFavesController.addGames,
//   updateFavesController.updateFavorites
// );

module.exports = router;
