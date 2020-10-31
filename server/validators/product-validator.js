const fs = require("fs");

module.exports = (req, res, next) => {
  const { name } = req.body;
  const id = +req.params.id;
  const products = JSON.parse(fs.readFileSync("./products.json"));

  if (products.find((product) => (product.id !== id && product.name === name))) {
    return res.status(400).json({ message: "Такой продукт уже есть" });
  }

  return next();
};
