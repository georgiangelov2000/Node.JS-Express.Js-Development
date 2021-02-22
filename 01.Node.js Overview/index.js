const fs=require('fs');
fs.readFile('index.js',(err,data)=>{
    if(err) console.log(err)
    console.log(data)
})
