const express = require('express')
const ProductModel = require('../database/models/models.js')
const route = express.Router()
const { register, login} = require('../controller/auth.js')
route.post("/register", register)
route.post("/login", login)
module.exports=route