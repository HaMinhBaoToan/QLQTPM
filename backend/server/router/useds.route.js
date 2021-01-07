const express = require("express");
const useds = require("../models/useds.model");

const router = express.Router();

router.get("/", async function (req, res) {
  const list = await useds.all();

  res.json(list);
});

module.exports = router;
