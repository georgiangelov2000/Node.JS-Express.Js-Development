let homeHandler=require('./home');
let staticHandler=require('./static-files');
let imageHandler=require('./images');
module.exports=[
    homeHandler,
    staticHandler,
    imageHandler
]