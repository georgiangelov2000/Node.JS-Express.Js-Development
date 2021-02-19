const express = require('express');
const app = express();
const path=require('path');
const port = 3005;

//first example
const publicPath=path.resolve(__dirname,'public');
app.use(publicPath,express.static('static'));

/*
//second example
app.use('/public',express.static('static'))
*/

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => console.log('App started on Port 3005'))