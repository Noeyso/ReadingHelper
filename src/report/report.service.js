const Report = require("../models").report;

exports.loadReport = async () => {
  try {
    const books = await Report.findAll({ raw: true });
    return books;
  } catch (error) {
    throw error;
  }
};
exports.saveReport = async (params) => {
  try {
    console.log(params);
    const book = await Report.create(params);
    console.log(book instanceof Report);
  } catch (error) {
    throw error;
  }
};
exports.deleteReport = async (id) => {
  try {
    console.log(id);
    const report = await Report.destroy({ where: { id: id } });
    console.log(report instanceof Report);
  } catch (error) {
    throw error;
  }
};
