"use strict";

var express = require('express');

var app = express();
var port = 3000;

var route = require('./router');

app.use('/api', route);
app.get('/', function (req, res) {
  res.end('Routing App');
});
app.listen(port, function () {
  console.log("Server listening  on ".concat(port));
});