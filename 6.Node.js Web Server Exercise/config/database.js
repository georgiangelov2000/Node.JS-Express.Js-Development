const fs=require('fs');
const { get } = require('http');
const path=require('path')
const dbPath=path.join(__dirname,'/database.json');

function getImages(){
    if(!fs.existsSync(dbPath)){
        fs.writeFileSync(dbPath,'[]');
        return [];
    }
    const json=fs.readFileSync(dbPath).toString()||'[]';
    const images=JSON.parse(json);
    return images;
}

function saveImages(images){
    const json=JSON.stringify(images);
    fs.writeFileSync(dbPath,json);
}

function getSignle(imageId){
    return getImages().filter(i=>i.id===imageId)[0];
}

module.exports.getImages={};
module.exports.images.getAll=getImages;
module.exports.images.getById=getSignle

module.exports.add=(image)=>{
    let images=getImages();
    image.id=images.length+1;
    images.push(image);
    saveImages(images);
}