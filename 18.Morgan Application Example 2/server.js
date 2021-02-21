const express=require('express')
const morgan = require('morgan');
const app=express();
const port=3000;

//app.use(morgan('tiny'))

morgan.token('host',(req,res)=>{
    return req.hostname;
})

app.use(morgan(':method :host :status :res[content-length] - :response-time ms'))

app.get('/',(req,res)=>{
   res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`App listening on ${port}`)
})