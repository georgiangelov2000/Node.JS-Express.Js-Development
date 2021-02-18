const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
    console.log('Logged');
    next();
}

const requestTime=function(req,res,next){
    req.reqTime=Date.now()
    next();
}

app.use(myLogger);
app.use(requestTime);

app.get('/',function(req,res){
    res.send(`Current Time! ${req.reqTime}`)
})

app.listen(3004,()=>console.log('app started on port 3004'));
