const mongoose = require("mongoose");

//Cart
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    dinosaurs: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
); //timestamp

module.exports = mongoose.model("Cart", CartSchema);
