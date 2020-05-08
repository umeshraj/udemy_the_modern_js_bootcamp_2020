const express = require("express");
const cartsRepo = require("../repositories/carts");
// const productsIndexTemplate = require("../views/products/index");

const router = express.Router();

// receive a post request to add item to cart
router.post("/cart/products", async (req, res) => {
  //figure out the cart
  let cart;
  if (!req.session.cartId) {
    // we don't have a cart; need to create one and store the cart id on req.session cartId property
    cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    //   we have a cart. Get it from repo
    console.log(req.session.cartId);
    cart = await cartsRepo.getOne(req.session.cartId);
  }

  console.log(cart);

  // either increment quantity or add new product

  res.send("Product added to cart!");
});

// receive a get request to show all items in cart

// receive a post request to delete item from cart

module.exports = router;
