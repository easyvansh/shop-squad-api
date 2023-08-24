const express = require("express");
const { createCart, getCart } = require("../database/cart");
const router = express.Router();

// Creating the Cart
router.post("/", async (req, res) => {
  const cartData = req.body;
  const ref = cartData.customer.uid;
  cartData.ref = ref;

  const newCart = await createCart(cartData);

  res.status(201).send({ status: "OK - Empty Cart Created with UID", data: newCart });
});

// Get The Cart To Display
router.get("/:reference", async (req, res) => {
  const cart = await getCart(req.params.reference);
  console.log(cart)
  if (!cart) {
    res.status(404).send({ status: "FAILED", error: "cart not found" });
    return;
  }

  res.send({ status: "OK", data: cart });
});

// Update the Cart (Add Product)
router.put("/:reference/:id", async (req, res) => {
    const cart = await getCart(req.params.reference);
    const product = await getCart(req.params.id);
    console.log(cart)
    console.log(product)
  
    if (!cart) {
      res.status(404).send({ status: "FAILED", error: "Cart not found" });
      return;
    }
  
    res.send({ status: "OK", data: cart });
  });

router.delete("/:reference/clear", async (req, res) => {
    const cart = await clearCart(req.params.reference);
  
    if (!cart) {
      res.status(404).send({ status: "FAILED", error: "cart not found" });
      return;
    }
  
    res.send({ status: "OK - Cart Cleared" });
  });


module.exports = router;