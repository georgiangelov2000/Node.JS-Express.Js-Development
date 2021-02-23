const axios = require('axios');

exports.homePage=(req,res)=>{
    axios.get('http://localhost:3000/api/users')
        .then((response)=>{
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.newUser=(req,res)=>{
    res.render('new-user')
}

exports.updateUser=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then((userdata)=>{
        res.render('update-user',{user:userdata.data})
    }).catch((error)=>{
        res.send(error);
    })
}