const fs = require("fs");

module.exports = (req, res, next) => {
  const { name, amount } = req.body;
  const products = JSON.parse(fs.readFileSync("./products.json"));

  if (!name) {
    return res.status(400).json({ message: "Введите имя продукта" });
  }
  if (!amount) {
    return res.status(400).json({ message: "Введите количество продукта" });
  }
  if (products.find((product) => product.name === name)) {
    return res.status(400).json({ message: "Такой продукт уже есть" });
  }

  return next();
};
