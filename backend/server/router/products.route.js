const express = require('express');
const productsModel = require('../models/products.model');

const router = express.Router();

router.get('/', async function (req, res) {
  console.log("0");
  const list = await productsModel.all();
  res.json(list);
})
router.get('/:id', async function (req, res) {
  const id = req.params.id || 0;
  const product = await productsModel.single(id);
  if (product === null) {
    return res.status(204).end();
  }

  res.json(product);
});

module.exports = router;