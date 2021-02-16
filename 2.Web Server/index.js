let http = require('http');

http
    .createServer((req, res) => {

        if(req.method==='POST'){
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            res.write('Hi from Post Node')
            res.end()
        }else if(req.method==='GET'){
            res.writeHead(500)
            res.write('GET IS NOT SUPPORTED')
            res.end()
        }
      
    })
    .listen(4000)
    console.log('Node server running on port 4000');
