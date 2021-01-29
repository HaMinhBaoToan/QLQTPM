const express = require("express");
const router = express.Router();
const categoriesModel = require("../models/categories.model");

router.get("/", async function (req, res) {
    const list = await categoriesModel.all();
  
    res.json(list);
  });

module.exports = router;
