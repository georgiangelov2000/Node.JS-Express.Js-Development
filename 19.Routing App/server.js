const express = require('express');
const app = express();
const port = 3000;
const route = require('./router')

app.use('/api',route)

app.get('/', (req, res) => {
    res.end('Routing App')
})

app.listen(port, () => {
    console.log(`Server listening  on ${port}`)
});