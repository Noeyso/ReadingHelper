const express = require("express");
const router = express();

const SearchController = require("./search.controller");
router.get("/", SearchController.getSearchResult);
router.get("/thumbnail", SearchController.getEncodedUri);

module.exports = router;
