const mongoose = require("mongoose");

//Dino profile
const DinoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: Array },
    price: { type: Number, required: true },
  },
  { timestamps: true }
); //timestamp

module.exports = mongoose.model("Dino", DinoSchema);
