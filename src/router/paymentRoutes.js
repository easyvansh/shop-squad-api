const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
 process.env.STRIPE_SECRET_KEY);

// payment endpoints

router.post("/intent", async (req, res) => {
  // Create a payment intent
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // Integer , usd -> pennies
      currency: "sgd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Return the secret
    res.json({
      paymentIntent: paymentIntent.client_secret,
      publishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});
router.post("/add/user", async (req, res) => {
  // Create a payment intent
  try {
    const customer = await stripe.customers.create({
      name : req.body.name,
      email : req.body.email,
      uid : req.body.uid,
    });

    // Return the secret
    res.json({
     
      customer: customer,
      
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
