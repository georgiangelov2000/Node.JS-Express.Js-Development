const http = require('http')
const fs = require('fs');
const port = 3003;

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        })
    } if (req.url === '/about') {
        fs.readFile('./about.html', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data)
            res.end();
        })
    } if (req.url === '/register') {
        fs.readFile('./register.html', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data)
            res.end();
        })
    } if (req.url === '/login') {
        fs.readFile('./login.html', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data)
            res.end();
        })
    }

}).listen(port)

