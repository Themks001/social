const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String },
    description: {type:String},
    postOwner: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    } 
  },
  {
    timestamps: true
  }
);

const models = mongoose.model("Post", userSchema);
module.exports = models;
