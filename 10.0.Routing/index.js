const express=require('express');
const app=express();
const port=3005


app.get('/',(req,res)=>{
res.send('Welcome to my Home page');
})
app.get('/about',(req,res)=>{
    res.send('Welcome to my About Page')
})
app.get('/weather',(req,res)=>{
    res.send('The wather is nice')
})
app.listen(port, () => console.log(`app started on port ${port}`))
