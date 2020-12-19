const express = require("express");
const router = express.Router();

const searchController = require("../controllers/searchController");
const { queryValidator, pageValidator } = require("../middleware/validators");

router.get(
  "/search?query=:query&page=:page",
  queryValidator(),
  pageValidator(),
  searchController
);

module.exports = router;
