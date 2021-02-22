const { response } = require('express');
const express = require('express')
const app = express()
const router = express.Router()
const port = 3005;

router.use(function (req, res, next) {
    if (!req.headers['x-auth']) return next('router')
    next()
})

router.get('/user/:id',function(req,res){
    response.send('hello, user!')
})

app.use('/admin',router,function(req,res){
    res.sendStatus(401)
})

app.listen(port, () => console.log(`app started on port ${port}`))