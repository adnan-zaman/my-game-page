const express = require("express");
const indexController = require("../controllers/indexController");
const router = express.Router();

router.get("/", indexController.index_get);
router.post("/", indexController.index_post);

module.exports = router;
