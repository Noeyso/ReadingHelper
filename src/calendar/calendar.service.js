const Library = require("../models").library;
const { Op } = require("sequelize");
exports.getBooks = async (dates) => {
  try {
    const books = await Library.findAll({
      where: {
        [Op.and]: [
          { user_id: 1 },
          { read_date: { [Op.between]: [dates.firstDay, dates.lastDay] } },
        ],
      },
    });
    return books;
  } catch (error) {
    throw error;
  }
};

exports.modifyMemo = async (params) => {
  try {
    console.log(params);
    const book = await Library.update(
      { memo: params.memo },
      { where: { book_isbn: params.isbn } }
    );
  } catch (error) {
    throw error;
  }
};
