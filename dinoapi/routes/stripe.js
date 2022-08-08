const router = require("express").Router();
const Stripe = require("stripe");

//STRIPE KEY DID NOT WORK IN ENV FILE FOR SOME REASON
const stripe = Stripe(
  "sk_test_51LO1ubGJXjr1tWnJPd4yioD7RZuwbvBWcyIRx6jjz6KxcEOKfsYTMp8ICHoauEPbxLftuX2wiPTVC6ERMWq3SG5p00sXXA7Odv"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
