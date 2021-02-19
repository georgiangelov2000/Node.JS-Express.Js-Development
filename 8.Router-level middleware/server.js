const express = require('express')
const app = express();
const router = express.Router();
const port = 3005;

router.use('/user/:id', function (req, res, next) {
    console.log('request Url:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

app.get('/', function (req, res) {
    res.send(`Hello World`);
})
app.get('/user/:id',function(req,res,next){
    res.send(`User Info: Method->${req.method} : Id->${req.params.id}`)
})

app.listen(port, () => console.log(`app started on port ${port}`))