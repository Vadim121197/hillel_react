const { Router } = require("express");
const fs = require("fs");
const { check, validationResult } = require("express-validator");
const Product = require("../models/Product");
const { db } = require("../models/Product");

const router = Router();

//получить все продукты
router.get("/products", (req, res) => {
  try {
    db.collection("products")
      .find()
      .toArray()
      .then((response) => res.json(response));
  } catch (error) {
    return res.status(500).json({ message: "Что-то пошло не так" });
  }
});

//получить продукт по id
router.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const findProduct = await Product.findById(id, function (err, doc) {
      if (err) return console.log(err);
    });

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

      return res.json();
    } catch (error) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

//обновление данных в продукте
router.put(
  "/products/:id",
  [
    check("name", "Пустое полe").exists(),
    check("price", "Введите число").isNumeric(),
  ],
  async (req, res) => {
    try {
      //возвращаем ошибки на front-end
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные",
        });
      }

      const { name, price } = req.body;
      const id = req.params.id;

      await Product.findByIdAndUpdate(id, { name, price }, function (
        err,
        user
      ) {
        if (err) return console.log(err);
      });

      return res.json({ message: "продукт успешно обновлён" });
    } catch (error) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

//удаление продукта по id
router.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id, function (err, doc) {
      if (err) return console.log(err);
    });

    return res.json({ message: "Продукт успешно удалён" });
  } catch (error) {
    return res.status(500).json({ message: "Что-то пошло не так" });
  }
});

module.exports = router;
