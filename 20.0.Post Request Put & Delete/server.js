const express=require('express');
const app=express();
const port=3001;
const route=require('./router')
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({
    extended:false
}))
app.use('/api',route)


app.get('/',(req,res)=>{
    res.end('Post Request')
})

app.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})