const express = require('express');
const path = require('path');
const app = express();

const port = 3005;

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use(express.urlencoded({
    extended:true
}));

app.get('/', (req, res) => [
    res.render('index',{
        title: 'Form Handling'
    })
])

app.post('/form_submit',(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    res.end(`Your username is ${username},${email}`)
})
app.listen(port, () => console.log('App started on Port 3005'))