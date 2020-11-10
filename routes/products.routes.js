const { Router } = require("express");
const fs = require("fs");
const { check, validationResult } = require("express-validator");
const Product = require("../models/Product");
const { db } = require("../models/Product");

const router = Router();

//получить все продукты
router.get("/products", (req, res) => {
  try {
    db.collection('products').find().toArray()
    .then(response => res.json(response)) ;
  } catch (error) {
    return res.status(500).json({ message: "Что-то пошло не так" });
  }
});

//получить продукт по id
router.get("/products/:id", (req, res) => {
  try {
    const id = +req.params.id;
    const products = JSON.parse(fs.readFileSync("./products.json"));
    const findProduct = products.find((product) => product.id === id);
    if (!findProduct) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }
    return res.json(findProduct);
  } catch (error) {
    return res.status(500).json({ message: "Что-то пошло не так" });
  }
});

//добавить продукт
router.post(
  "/products",
  [
    check("name", "Пустое полe").exists(),
    check("price", "Введите число").isNumeric(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { name, price } = req.body;

      const findProduct = await Product.findOne({ name });

      if (findProduct) {
        return res.json({ message: "Продукт существует" });
      }

      const product = new Product({ name, price });
      await product.save();

      return res.json({ message: "продукт успешно добавлен" });
    } catch (error) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

//обновление данных в продукте - другой валидатор
router.put(
  "/products/:id",
  [
    check("name", "Пустое полe").exists(),
    check("amount", "Введите число").isNumeric(),
  ],
  (req, res) => {
    try {
      //возвращаем ошибки на front-end
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные",
        });
      }

      const { name, amount } = req.body;
      const id = +req.params.id;
      const products = JSON.parse(fs.readFileSync("./products.json"));

      const findProduct = products.find((product) => product.id === id);
      if (!findProduct) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      const updateProducts = products.map((product) =>
        product.id === id ? { id, name, amount } : product
      );

      fs.writeFileSync("./products.json", JSON.stringify(updateProducts));

      return res.json({ message: "продукт успешно обновлён" });
    } catch (error) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

//удаление продукта по id
router.delete("/products/:id", (req, res) => {
  try {
    const id = +req.params.id;
    const products = JSON.parse(fs.readFileSync("./products.json"));
    const findProduct = products.find((product) => product.id === id);
    if (!findProduct) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }
    products.splice(findProduct, 1);

    fs.writeFileSync("./products.json", JSON.stringify(products));

    return res.json({ message: "продукт успешно удалён" });
  } catch (error) {
    return res.status(500).json({ message: "Что-то пошло не так" });
  }
});

module.exports = router;
