const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//add products routes
app.use("/api/", require("./routes/products.routes.js"));

app.use("*", (req, res) => res.send("Page Not Found"));

app.use("*", (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = config.get("port") || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
