const { Router } = require("express");
const mongoose = require('mongoose');


const router = Router();

router.get("/products", (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Что-то пошло не так" });
  }
});

module.exports = router;
