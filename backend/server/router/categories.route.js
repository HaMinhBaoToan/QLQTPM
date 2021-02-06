const express = require("express");
const router = express.Router();
const categoriesModel = require("../models/categories.model");

router.get("/", async function (req, res) {
  const list = await categoriesModel.all();

  res.json(list);
});

router.post("/", async function (req, res) {
  const categories = req.body;
  const id_cate = await categoriesModel.add(categories);
  id_cate.Categorie_ID = id_cate[0];

  res.status(201).json(id_cate); // created
});
router.put("/:id", async function (req, res) {
  const id = req.params.id;
  const categorie = req.body;

  delete categorie.key;
  delete categorie.Categorie_ID;

  delete categorie.Categorie_UpdateDate;
  delete categorie.User_FullName;

  await categoriesModel.update(id, categorie);

  res.json({
    message: "update success",
  });
});
router.delete("/:id", async function (req, res) {
  const id = req.params.id || 0;
  if (id === 0) {
    return res.status(304).end();
  }

  await categoriesModel.delete(id).then((result) => {
    res.json({
      message: "delete success",
    });
  }).catch((err) => {
    res.status(500).json(err);
  });;

  
});
module.exports = router;
