const express = require('express');
const route = express.Router();
const accounts = require('./database');

route.get('/accounts', (req, res) => {
    res.json({
        userData: accounts
    })
})
module.exports=route;