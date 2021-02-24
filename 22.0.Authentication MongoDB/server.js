const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./server/config/database");
const bcrypt = require("bcrypt");

mongoose.connect(
  "mongodb+srv://angelov2000:angelov2001@newcluster.cxigb.mongodb.net/authentication?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/", express.static(path.join(__dirname, "views")));
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  const { username, password: myPassword } = req.body;

  if(!username||typeof username!=='string'){
    return res.json({status:'error',error:'Invalid username'})
  }
  if (myPassword.length < 5) {
    return res.json({status: "error",error: "Password too small.Please try again latter!",});
  }

  const password=await bcrypt.hash(myPassword,10)
  console.log(password)
  
  try {
    const response = await User.create({ username, password });
    console.log(response);
  } catch (error) {
    if (error.code === 11000) {
    return res.json({ status: "error", error: "Username already in use" });
    }
  }
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
