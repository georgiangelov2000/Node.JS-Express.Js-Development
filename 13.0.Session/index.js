const express=require('express');
const app=express();
const session=require('express-session');
const port=3005;

app.use(session({
    secret:"Your secret key",
    resave:true,
    saveUninitialized:true
}));

app.get('/',(req,res)=>{
    req.session.name='John';
    return res.send('Session set');
});

app.get('/session',(req,res)=>{
    const name=req.session.name;
    return res.send(name)
})

app.listen(port,()=>{
    console.log(`App listen on ${port}`)
})