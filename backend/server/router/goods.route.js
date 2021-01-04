const express = require("express");
const goods = require("../models/goods.model");

const router = express.Router();

router.get("/", async function (req, res) {
  const list = await goods.all();

  res.json(list);
});

module.exports = router;
