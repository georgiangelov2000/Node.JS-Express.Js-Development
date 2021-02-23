const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use("/", express.static(path.join(__dirname, "views")));
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
