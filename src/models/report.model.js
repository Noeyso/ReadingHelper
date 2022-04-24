module.exports = (sequelize, DataTypes) => {
  let report = sequelize.define(
    "report",
    {
      title: {
        field: "title",
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      author: {
        field: "author",
        type: DataTypes.STRING(50),
      },
      content: {
        field: "content",
        type: DataTypes.STRING(5000),
        allowNull: false,
      },
      book_title: {
        field: "book_title",
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      book_thumbnail: {
        field: "book_thumbnail",
        type: DataTypes.STRING(200),
      },
      book_isbn: {
        field: "book_isbn",
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      start_date: {
        field: "start_date",
        type: DataTypes.STRING(50),
      },
      end_date: {
        field: "end_date",
        type: DataTypes.STRING(50),
      },
      rate: {
        field: "rate",
        type: DataTypes.BIGINT,
      },
      tags: {
        field: "tags",
        type: DataTypes.STRING(100),
      },
      user_id: {
        field: "user_id",
        type: DataTypes.BIGINT,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "report",
      timestamps: false,
    }
  );
  return report;
};
