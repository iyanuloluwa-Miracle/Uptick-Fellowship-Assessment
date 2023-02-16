const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("Auth", authSchema);

module.exports = User;
