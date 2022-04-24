const express = require("express");
const app = express();
const library = require("./src/library");
const calendar = require("./src/calendar");
const report = require("./src/report");
const search = require("./src/search");

const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./src/models");

db.sequelize.sync();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hellow world!");
});

app.use("/library", library);
app.use("/calendar", calendar);
app.use("/report", report);
app.use("/search", search);

app.listen(8080, () => console.log(`Listening on port 8080`));
