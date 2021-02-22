const http = require('http')
const port = 5000
const handlers = require('./handlers/index')
http
    .createServer((req, res) => {
        for (let handler of handlers) {
            const next = handler(req, res)
            if (!next) {
                break;
            }
        }
    })
    .listen(port)
console.log(`Server listining on ${port}`)