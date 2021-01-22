const express = require("express");
const usedsModel = require("../models/useds.model");

const router = express.Router();

router.get("/", async function (req, res) {
  const list = await usedsModel.all();

  res.json(list);
});

router.post("/", async function (req, res) {
  const useds = req.body;
  const id_list = await usedsModel
    .add(useds)
    .then(function (respon) {
      useds.Goods_ID = respon[0];
      res.status(201).json(useds); // created
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

module.exports = router;
