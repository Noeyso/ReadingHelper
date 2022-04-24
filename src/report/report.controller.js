const ReportService = require("./report.service");

exports.loadReport = async (req, res, next) => {
  try {
    const result = await ReportService.loadReport();
    res.send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.saveReport = async (req, res, next) => {
  try {
    const result = await ReportService.saveReport(req.body);
    res.send("success");
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.deleteReport = async (req, res, next) => {
  try {
    console.log(req.body.reportId);
    const result = await ReportService.deleteReport(req.body.reportId);
    res.send("success");
  } catch (err) {
    return res.status(500).json(err);
  }
};
