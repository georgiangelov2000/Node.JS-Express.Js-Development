"use strict";

var express = require('express');

var route = express.Router();

var accounts = require('./database');

route.get('/accounts', function (req, res) {
  res.json({
    userData: accounts
  });
});
module.exports = route;