const CalendarService = require("./calendar.service");

exports.getBooks = async (req, res, next) => {
  try {
    console.log(req.query);
    const result = await CalendarService.getBooks(req.query);
    console.log(result);
    res.send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.modifyMemo = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await CalendarService.modifyMemo(req.body);
    console.log(result);
    res.send(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};
