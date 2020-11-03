const { Router } = require("express");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const router = Router();

router.post(
  "/auth/register",
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

      return res.status(201).json({ message: "Пользователь создан успешно" });
    } catch (error) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

router.post("/auth/login", async (req, res) => {});

module.exports = router;
