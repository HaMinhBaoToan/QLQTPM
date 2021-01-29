const express = require("express");
const productsModel = require("../models/products.model");

const router = express.Router();

router.get("/", async function (req, res) {
  const list = await productsModel.all();
  res.json(list);
});

router.get("/:id", async function (req, res) {
  const id = req.params.id || 0;
  const product = await productsModel.single(id);
  if (product === null) {
    return res.status(204).end();
  }

  res.json(product);
});

router.post("/", async function (req, res) {
  const product = req.body;
  const id_list = await productsModel.add(product);
  id_list.Product_ID = id_list[0];

  res.status(201).json(id_list); // created
});

router.delete("/:id", async function (req, res) {
  const id = req.params.id || 0;
  if (id === 0) {
    return res.status(304).end();
  }

  await productsModel.delete(id);

  res.json({
    message: "delete success",
  });
});

router.put("/:id", async function (req, res) {
  const id = req.params.id;
  const product = req.body;
  delete product.key;
  delete product.Product_ID;
  delete product.Product_CostPriceString;
  delete product.Product_NewPriceString;
  delete product.Product_ImageBase;
  delete product.Categorie_Name;
  delete product.Categorie_ID
   await productsModel.update(id, product);

  res.json({
    message: "update success",
  });
});

module.exports = router;
