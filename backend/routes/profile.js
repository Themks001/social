const express = require('express')

const {getProfile, getAllProfile}= require('../controller/users.profile.js')

const route = express.Router()

route.get("/profile/:id", getProfile)
route.get("/profile/", getAllProfile)

module.exports=route