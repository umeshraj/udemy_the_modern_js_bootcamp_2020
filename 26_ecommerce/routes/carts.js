const express = require("express");
// const productRepo = require("../repositories/products");
// const productsIndexTemplate = require("../views/products/index");

const router = express.Router();

// receive a post request to add item to cart
router.post("/cart/products", (req, res) => {
  console.log(req.body.productId);
  res.send("Product added to cart!");
});

// receive a get request to show all items in cart

// receive a post request to delete item from cart

module.exports = router;
