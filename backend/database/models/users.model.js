const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  followers:{
    type:Number,
    default:0
  },
  followings:{
    type:Number,
    default:0
  },
});
const registerModel = mongoose.model("users", userSchema);

module.exports = registerModel;
