const express = require("express");
const goodsModel = require("../models/goods.model");

const router = express.Router();

router.get("/", async function (req, res) {
  const list = await goodsModel.all();

  res.json(list);
});

router.post("/", async function (req, res) {
  const goods = req.body;
  const id_list = await goodsModel
    .add(goods)
    .then(function (respon) {
      goods.Goods_ID = respon[0];
      res.status(201).json(goods); // created
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

router.put("/:id", async function (req, res) {
  const goods = req.body;
  await goodsModel
    .update(goods[0].Goods_ID, goods[1])
    .then(function (response) {
      res.json({
        message: response,
        status: "success",
      });
    })
    .catch(function (error) {
      res.json({
        message: error,
        status: "false",
      });
    });
});
module.exports = router;
