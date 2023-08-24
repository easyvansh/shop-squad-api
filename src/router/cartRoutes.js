const express = require("express");
const { createCart, getCart } = require("../database/cart");
const router = express.Router();
router.get("/:reference", async (req, res) => {
  const cart = await getCart(req.params.reference);

  if (!cart) {
    res.status(404).send({ status: "FAILED", error: "cart not found" });
    return;
  }

  res.send({ status: "OK", data: cart });
});

router.put("/:reference/:id", async (req, res) => {
    const cart = await getCart(req.params.reference);
    const product = await getCart(req.params.id);
  
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

router.post("/", async (req, res) => {
  const cartData = req.body;
  const ref = cartData.customer.uid;
  cartData.ref = ref;

  const newCart = await createCart(cartData);

  res.status(201).send({ status: "OK - Empty Cart Created with User Id", data: newCart });
});

module.exports = router;
