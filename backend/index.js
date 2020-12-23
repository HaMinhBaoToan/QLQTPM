const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const morgan = require("morgan");

const PRODUCTS = require('./server/router/products.route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (request, respond) => {
  respond.status(200).json({
    message: "Welcome to Project Support",
  });
});

app.use('/api/products',require('./server/router/products.route') );

app.get('/err', function (req, res) {
  throw new Error('Error!');
});

app.use(function (req, res, next) {
  res.status(404).send({
    error_message: 'Endpoint not found!'
  })
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send({
    error_message: 'Something broke!'
  });
});



app.listen(PORT, function () {
  console.log(`Server is running on Port: http://localhost:${PORT}`);
});

module.exports = app;