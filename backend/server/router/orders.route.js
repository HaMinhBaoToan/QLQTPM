const express = require("express");
const orderModel = require("../models/orders.model");
const order_schema = require("../schemas/order.json");
const validate = require("../middlewares/validate.mdw");
const router = express.Router();

router.get("/", async function (req, res) {
  const list = await orderModel.all();

  res.json(list);
});

router.get("/details", async function (req, res) {
  const { fromDate, toDate } = req.query 

 const list = await orderModel.getDataReport_Order(fromDate,toDate);

  res.json(list);
});

router.get("/top", async function (req, res) {
  const { fromDate, toDate } = req.query 

 const list = await orderModel.getDataReport_Top(fromDate,toDate);

  res.json(list);
});
router.get("/users", async function (req, res) {
  const list = await orderModel.allUser();

  res.json(list);
});

router.get("/:id", async function (req, res) {
  const id = req.params.id || 0;
  const order = await orderModel.single(id);

  if (order === null) {
    return res.status(204).end(); // no content
  }

  res.json(order);
});
router.get("/:id/details", async function (req, res) {
  const id = req.params.id || 0;
  const order_detail = await orderModel.detail(id);

  if (order_detail === null) {
    res.status(204).end(); // no content
  } else {
    res.json(order_detail);
  }
});
router.post("/", async function (req, res) {
  const order = req.body;
  const id_list = await orderModel
    .add(order)
    .then(function (respon) {
      order.Order_ID = respon[0];
      res.status(201).json(order); // created
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

router.delete("/:id", async function (req, res) {
  const id = req.params.id || 0;
  if (id === 0) {
    return res.status(304).end();
  }

  await orderModel.delete(id);

  res.json({
    message: "delete success",
  });
});

router.put("/:id",  function (req, res) {
  const id = req.params.id;
  const order = req.body;
   orderModel.update(id, order);

  res.json({
    message: "update success",
  });
});

module.exports = router;
