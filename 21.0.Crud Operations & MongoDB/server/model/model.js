const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: String,
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Userdb=mongoose.model('MyFirstDatabase',schema)
module.exports=Userdb
