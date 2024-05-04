const express = require("express");
const router = express.Router();

const {
  login,
  signup,
} = require("../../../../Sem 6/SE Lab/FoodLens/backend/controllers/auth");

router.post("/login", login);

router.post("/signup", signup);

module.exports = router;
