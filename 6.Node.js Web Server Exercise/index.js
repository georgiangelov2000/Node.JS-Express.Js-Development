let http=require('http');
let port=3002;
let url=require('url')
let handlers=require('./handlers')

http.createServer((req,res)=>{
    req.path=url.parse(req.url).pathname;
    for(let handler of handlers){
        let next=handler(req,res);
        if(!next){
            break;
        }
    }
})
.listen(port)
console.log(`Server listening on port ${port}`)