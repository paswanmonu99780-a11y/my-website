const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  modelId: String,
  amount: Number,
  commission: Number
});

module.exports = mongoose.model("Order", orderSchema);