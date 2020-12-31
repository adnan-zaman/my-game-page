const express = require("express");
const router = express.Router();

const getHeaders = require("../core/getHeaders");
const searchController = require("../controllers/searchController");
const updateFavesController = require("../controllers/updateFavoritesController");
const {
  queryValidator,
  pageValidator,
  intArrayValidator,
} = require("../middleware/validators");
const { validationResult } = require("express-validator");

router.use(getHeaders);

router.get(
  "/search/:query/:page",
  queryValidator(),
  pageValidator(),
  searchController
);

router.put(
  "/favorites/:userId",
  intArrayValidator(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array()[0].msg);
    }
    next();
  },
  (req, res) => res.json("OK")
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
