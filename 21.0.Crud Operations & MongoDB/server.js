const express = require("express");
const app = express();
const port = process.env.port || 3000;

const dotenv = require("dotenv");
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');

const connectDb=require('./server/database/connectdb')

dotenv.config({ path: "config.env" });

app.set('view engine','ejs')
//app.set('views',path.resolve(__dirname,'views/ejs'))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use(morgan('tiny'));
connectDb();
app.use(bodyparser.urlencoded({extended:true}))

app.use('/',require('./server/routes/router'))

app.listen(port, () => {
  console.log(`Server listen on 3000`);
});
