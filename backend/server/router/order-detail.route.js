const express = require("express");
const order_detail_Model = require("../models/order-detail.model");

const router = express.Router();

router.get("/", async function (req, res) {
  const list = await order_detail_Model.all();

  res.json(list);
});

router.get("/:id", async function (req, res) {
  const id = req.params.id || 0;
  const detail_order = await order_detail_Model.single(id);

  if (detail_order === null) {
    return res.status(204).end(); // no content
  }

  res.json(detail_order);
});

router.post("/", async function (req, res) {
  const detail_order = req.body;
  var item =[];
  for (const property in detail_order[1]) {
   item.push({
      OrderID: detail_order[0],
      ProductID: detail_order[1][property].ProductID,
      Quantity: detail_order[1][property].Quantity,
    });
  }

  const id_list = await order_detail_Model
      .add(item)
      .then(function (respon) {
        res.status(201).json(respon); // created
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
});
module.exports = router;
