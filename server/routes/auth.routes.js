const { Router } = require("express");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const router = Router();

router.post(
  "/auth/signup",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длина 6 символов").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { email, password } = req.body;

    try {
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "Пользователь существует" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email, password: hashedPassword });

      await user.save();

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expireIn: "1h",
      });

      jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expireIn: "1h",
      });


      return res
        .status(201)
        .json({
          token,
          userId: user.id,
          message: "Пользователь создан успешно",
        });
    } catch (error) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

router.post(
  "/auth/login",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длина 6 символов").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Неверный пароль" });
      }

      jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expireIn: "1h",
      });

      return res.json({
        token,
        userId: user.id,
        message: "Пользователь авторизован",
      });
    } catch (error) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

module.exports = router;
