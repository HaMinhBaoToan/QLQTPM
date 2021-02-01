const express = require("express");
const userModel = require('../models/users.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
// const { route } = require("./film.route");
const router = express.Router();

router.post('/', async function(req, res){
    const user = await userModel.singleByUserName(req.body.User_Name);
    if(user === null){
        return res.json({
            authenticated: false
        })
    }

    if (!bcrypt.compareSync(req.body.User_Password, user.User_Password)){
        return res.json({
            authenticated: false
        })
    }

    const accessToken = jwt.sign({
        userId: user.User_ID
    }, 'SECRET_KEY', {
        expiresIn: 10 * 60
    });

    const refreshToken = randomstring.generate();
    await userModel.updateRefreshToken(user.User_ID, refreshToken);

    res.json({
        authenticated: true,
        accessToken,
        refreshToken
    })
})

router.post('/refresh', async function (req, res){
    // req.body = {
    //     accessToken,
    //     refreshToken
    // }

    const { accessToken, refreshToken } = req.body;

    const { userId } = jwt.verify(accessToken, 'SECRET_KEY', {
        ignoreExpiration: true
    });

    const ret = await userModel.isValidRefreshToken(userId, refreshToken);
    if(ret) {
        const newAccessToken = jwt.sign({ userId }, 'SECRET_KEY', { expiresIn: 60 * 10 });

        return res.json({
            accessToken: newAccessToken
        })
    }

    res.status(400).json({      // bad request
        message: 'Invalid refresh token.'
    })
})

module.exports = router;