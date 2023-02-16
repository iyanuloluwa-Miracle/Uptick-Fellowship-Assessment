const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../utilities/helpers");
const secretKey = process.env.SECRET_KEY;

//Creating new user
exports.createUser = async function (req, res) {
  const newUser = req.body;

  try {
    const existingUser = await User.findOne({ email: newUser.email });
    // console.log(existingUser);
    if (existingUser) {
      res.status(400).send({ msg: "User already exists!" });
    } else {
      const password = hashPassword(newUser.password);
      newUser.password = password;
      const user = await User.create(newUser);

      res.status(201).json(user);
    }
  } catch (err) {
    console.log(err);
  }
};

// Logging in User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ status: false, message: "Missing credentials" });

    const userDB = await User.findOne({ email });

    if (!userDB)
      return res.status(401).json({ status: false, message: "User not found" });

    const isPasswordValid = comparePassword(password, userDB.password);
    if (isPasswordValid) {
      const token = jwt.sign({ email, id: userDB._id }, secretKey, {
        expiresIn: "1d",
      });

      return res
        .status(200)
        .json({ status: true, message: "Login successful", token });
    } else {
      console.log("Authentication failed");
      return res
        .status(401)
        .json({ status: false, message: "Wrong credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};
