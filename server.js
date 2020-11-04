const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const config = require("config");
const mongoose = require("mongoose");
const startMongoServer = require("./db/db.js");

const app = express();
const PORT = config.get("PORT") || 5000;

startMongoServer();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//auth routes
app.use("/api", require("./routes/auth.routes.js"));

//products routes
app.use("/api", require("./routes/products.routes.js"));

app.use("*", (req, res) => {
  return res.status(500).json({ message: "Страница не найдена" });
});

app.use("*", (err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ message: "Что-то пошло не так" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
