const registerModel = require("../database/models/users.model.js");

const getProfile = async (req, res) => {
  try {
    console.log("this is params",req.params);
    const userId = req.params.id;
    const profile = await registerModel.findById(userId);
    console.log(profile);
    console.log("profile data sent to the client");
    res.status(200).json({ profile });
  } catch (e) {
    console.log("error at profile", e);
  }
};

const getAllProfile = async (req, res) => {
  try {
    const profiles = await registerModel.find();
    console.log(" all profiles data sent to the client");
    console.log(profiles);
    res.status(200).json({ profiles });
  } catch (e) {
    console.log("error at profile", e);
  }
};
module.exports = { getAllProfile, getProfile };
