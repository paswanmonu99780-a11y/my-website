const Model = require("./Model");
const express = require("express");
const mongoose = require("mongoose");
app.use("/uploads", express.static("uploads"));
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/renderrealm")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// TEST API
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});
app.post("/signup", async (req, res) => {
  const User = require("./User");
  const user = new User(req.body);
  await user.save();
  res.send("User Created");
});
app.post("/login", async (req, res) => {
  const User = require("./User");

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
app.post("/upload", async (req, res) => {
  const Model = require("./Model");

  const model = new Model(req.body);
  await model.save();

  res.send("Model Uploaded");
});
  if(user) res.send("Login Success");
  else res.send("Invalid");
});
app.post("/upload", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "model", maxCount: 1 }
]), async (req, res) => {

  const Model = require("./Model");

  const newModel = new Model({
    name: req.body.name,
    price: req.body.price,
    creator: req.body.creator,
    image: req.files.image[0].filename,
    file: req.files.model[0].filename
  });

  await newModel.save();

  res.send("Model + Image Uploaded Successfully 🚀");
});
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});