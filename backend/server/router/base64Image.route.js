const express = require("express");
var fs = require('fs');
const router = express.Router();

router.post("/", async function (req, res) {
  const imageBase64 = req.body.Product_ImageBase;
  // var base64Data = imageBase64.replace(/^data:image\/jpeg;base64,/, "");
  // console.log(base64Data)
  fs.writeFile("../frontend/public/product/out.png", imageBase64, 'base64', function(err) {
    console.log(err);
  });
  res.json({
    status: "success",
  });
});

module.exports = router;
