let http = require('http')
let fs = require('fs');
let url=require('url');
const port = 5000
http
    .createServer((req, res) => {
        const parsedUrl = url.parse(req.url).pathname  

        if (parsedUrl === '/') {
            fs.readFile('./index.html', (err, data) => {
                if (err) console.log(err)

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                res.write(data)
                res.end()
            })
        } else {
            fs.readFile('.' ,parsedUrl, (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.write('404 Not Found')
                    res.end()
                    return
                }
                res.writeHead(200)
                res.write(data)
                res.end()
            })
        }
    })
    .listen(port)
console.log(`Server listining on ${port}`)