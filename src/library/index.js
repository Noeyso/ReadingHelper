const express = require("express");
const router = express();

const LibraryController = require("./library.controller");
router.get("/", LibraryController.getBooks);
router.post("/", LibraryController.saveBook);
router.put("/", LibraryController.saveCalendar);
router.delete("/", LibraryController.deleteBook);

module.exports = router;
