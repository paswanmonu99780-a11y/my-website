const mongoose = require("mongoose");
const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  name: String,
  price: Number,
  creator: String,
  image: String,
  file: String
});

module.exports = mongoose.model("Model", modelSchema);
const modelSchema = new mongoose.Schema({
  name: String,
  price: Number,
  creator: String,
  file: String
});

module.exports = mongoose.model("Model", modelSchema);