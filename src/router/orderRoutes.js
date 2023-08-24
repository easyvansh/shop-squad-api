const express = require("express");
const { createOrder, getOrder } = require("../database/orders");
const router = express.Router();
router.get("/:reference", async (req, res) => {
  const order = await getOrder(req.params.reference);

  if (!order) {
    res.status(404).send({ status: "FAILED", error: "Order not found" });
    return;
  }

  res.send({ status: "OK", data: order });
});

router.post("/", async (req, res) => {
  const orderData = req.body;
  const ref = orderData.customer.uid;
  orderData.ref = ref;

  const newOrder = await createOrder(orderData);

  res.status(201).send({ status: "OK", data: newOrder });
});

module.exports = router;
