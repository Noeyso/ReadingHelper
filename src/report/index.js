const express = require("express");
const router = express();

const ReportController = require("./report.controller");
router.get("/", ReportController.loadReport);
router.post("/", ReportController.saveReport);
router.delete("/", ReportController.deleteReport);

module.exports = router;
