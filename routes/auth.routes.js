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
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const { email, password, confPass } = req.body;
      const candidate = await User.findOne({ email });

      if (password !== confPass) {
        return res.json();
      }

      if (candidate) {
        return res.json({ message: "Пользователь существует" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email, password: hashedPassword });

      await user.save();

      jwt.sign(
        { userId: user.id },
        config.get("jwtSecret"),
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            message: "Пользователь создан успешно",
            userId: user.id,
            token,
          });
        }
      );
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
        return res.json({ message: "Пользователь не найден" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.json({ message: "Неверный пароль" });
      }

      jwt.sign(
        { userId: user.id },
        config.get("jwtSecret"),
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            message: "Пользователь успешно вошел",
            userId: user.id,
            token,
          });
        }
      );
    } catch (error) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

module.exports = router;
