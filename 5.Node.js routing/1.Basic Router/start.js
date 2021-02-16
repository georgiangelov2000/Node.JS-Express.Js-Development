const http=require('http');
const server=require('./server');

http.createServer(server.handleRequest).listen(3500)