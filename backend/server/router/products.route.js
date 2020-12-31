const express = require('express');
const productsModel = require('../models/products.model');

const router = express.Router();

router.get('/', async function (req, res) {
  
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


router.post('/', async function(req, res){

  const product = req.body;
  const id_list = await productsModel.add(product);
  order.Product_ID = id_list[0];

  res.status(201).json(product);     // created
})

router.delete('/:id', async function(req, res){
  const id = req.params.id || 0;
  if(id === 0){
      return res.status(304).end()
  }

  await productsModel.delete(id);

  res.json({
      message: "delete success"
  });
})

router.put('/:id', async function(req, res){
  const id = req.params.id;
  const product = req.body ;

  await productsModel.update(id, product);

  res.json({
      message: "update success"
  });
})

module.exports = router;