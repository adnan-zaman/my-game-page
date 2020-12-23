const express = require("express");
const router = express.Router();

const getHeaders = require("../core/getHeaders");
const searchController = require("../controllers/searchController");
const { queryValidator, pageValidator } = require("../middleware/validators");

router.use(getHeaders);

router.get(
  "/search/:query/:page",
  queryValidator(),
  pageValidator(),
  searchController
);

module.exports = router;
