const express = require("express");
const router = express();

const CalendarController = require("./calendar.controller");

router.get("/", CalendarController.getBooks);
router.put("/", CalendarController.modifyMemo);

module.exports = router;
