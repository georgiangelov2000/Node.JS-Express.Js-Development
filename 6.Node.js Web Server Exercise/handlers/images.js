const path = require('path');
const fs = require('fs');
const qs = require('querystring');
const database = require('../config/database');

module.exports = (req, res) => {
    if (req.path === '/images/add' && req.method === 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/add.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
            }
            res.write(data);
            res.end();
        })
    } else if (req.path === '/images/add' && req.method === 'POST') {
        let body = '';

        req.on('end', (data) => {
            body += data
        });

        req.on('end', () => {
            let image = qs.parse(body);

            if (!image.name || !image.url) {
                res.writeHead(200);
                res.write('Some of the fields are not filled');
                res.end();
            } else {
                database.images.add(image)
                res.writeHead(302, {
                    Location: '/'
                })
                res.end()
            }
        })
    } else if (req.path === '/images/all' && req.method === 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/all.html'));
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                }),
                    res.write('404 not found');
                res.end();
                return;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            const images = database.images.getAll();
            let content = '';

            for (let image of images) {
                content += `<div class="image">
                <img class="img" src="${image.url}" />
                <h2>${image.name}</h2>
                <a href=/images/details/${image.id}>View Details</a>
                </div>`
            }
            const html = data.toString().replace('{content}', content);
            res.write(html);
            res.end();
        })
    } else if (req.path.startsWith('/images/details') && req.method === 'GET') {
        const id = Number(req.path.split('/').pop());
        const filePath = path.normalize(path.join(__dirname, '../views/details.html'));
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.write(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not Found!');
                res.end();
                return;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            const image = database.images.getById(id);
            content = `<div class="img-full">
            <h2>${image.name}</h2>
            <img src="${image.url}">
            </div>`;
            const html = data.toString().replace('{content}', content).replace('{img.id}'.image.id);
            res.write(html);
            res.end();
        })

    } else {
        return true;
    }
}