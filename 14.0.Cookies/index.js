const express=require('express');
const app=express();
const cookies=require('cookie-parser')
const port=3005


app.use(cookies());

const user={
    name:'John',
    age:25
}

app.get('/',(req,res)=>{
    res.send('Cookies Tutorial')
});

app.get('/setuser',(req,res)=>{
    res.cookie('user data',user)
    res.send('User Data Added to Cookies')
})
  
app.get('/getuser',(req,res)=>{
    res.send(req.cookies)
})

app.get('/logout',(req,res)=>{
    res.clearCookie('userData');
    res.send('User Logout Successfully')
})

app.listen(port, () => console.log(`App started on Port ${port}`))
