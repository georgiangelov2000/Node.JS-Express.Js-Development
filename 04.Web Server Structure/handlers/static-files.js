const fs = require('fs');
const url = require('url');

function getContentType(url) {
    const contentType = 'text/plain';
    if (url.pathName.endsWith('.css')) {
        contentType = 'text/css'
    } else if (url.pathName.endsWith('.js')) {
        contentType = 'application/javascript'
    }
    return contentType
}

module.exports = (req, res) => {
    req.pathName = req.pathName || url.parse(req.url).pathname
    fs.readFile('.' + req.pathName, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('404 Not Found')
            res.end()
            return true ;
        }
        const contentType = getContentType(req.pathName)
        res.writeHead(200, {
            'Content-Type': contentType
        })
        res.write(data)
        res.end()
    })
}