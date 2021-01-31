const express = require('express');
const userModel = require("../models/users.model");
const route = express.Router();
var bcrypt = require('bcryptjs');

route.post('/register', async function(req, res){
    const user = req.body;   
    user.User_Role = 1;
    user.User_Password = bcrypt.hashSync(user.User_Password, 10);
    user.User_ID = await userModel.add(user);
    delete user.User_Password;

    res.status(201).json(user);
})

module.exports = route;