const homeHandler=require('./home');
const staticHandler=require('./static-files');
const imageHandler=require('./images');
module.exports=[
    homeHandler,
    staticHandler,
    imageHandler
]