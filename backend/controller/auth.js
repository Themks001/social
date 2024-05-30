const registerModel = require("../database/models/users.model.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email } = req.body;
    const userExist = await registerModel.findOne({ email });
    if (userExist) {
      res.json({ message: "userExist in the database" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const registerUser = new registerModel({
      username,
      email,
      password: hashedPassword
    });
    await registerUser.save();
    console.log("user saved");
  } catch (error) {
    console.log("this is the error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body)
    const user = await registerModel.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Validate password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid password" });
      const token = jwt.sign({username:user.username, id:user._id}, process.env.SECRET)
    res.status(200).json({ message: "Login successful", userId: user._id, token,  user});
  } catch (error) {
    console.error("this is error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { register, login };
