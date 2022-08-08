const mongoose = require("mongoose");

//Order
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    dinosaurs: [
      {
        dinoId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    status: { type: String, default: "feeding" },
  },
  { timestamps: true }
); //timestamp

module.exports = mongoose.model("Order", OrderSchema);
