const express = require('express');
const app = express();
const port = 3002;

/*
app.use('/user/:id',function(req,res,next){
    console.log('Request Url:',req.originalUrl)
    next()
},function(req,res,next){
    console.log('Request Type:',req.method)
    next()
},function(req,res,next){
    console.log('Id:',req.params.id)
    next()
});
*/
/*
app.get('/user/:id',function(req,res,next){
    res.send(`User Info: Method:${req.method}, Id:${req.params.id} `,)   
})
*/

const requestTime = function (req, res, next) {
    req.myTime = Date.now();
    next()
}

const logOrinalUrl=function(req,res,next){
    console.log('Request Url:',req.originalUrl)
    next()
}
const logMethod=function(req,res,next){
    console.log('Request Type:',req.method)
    next()
}
let logStaff=[logOrinalUrl,logMethod]

app.use(requestTime);


app.get('/', function (req, res) {
    res.send(`Current Time! ${req.myTime}`);
})
app.get('/user/:id',logStaff,function(req,res,next){
    res.send(`User Info: Method->${req.method} : Id->${req.params.id}`)
})




app.listen(port, () => console.log('app start on port 3002'))