const express=require('express');
const route=express.Router();
const services=require('../services/rendering');
const controller=require('../controllers/controller');
route.get('/',services.homePage);
route.get("/new-user",services.newUser);
route.get("/update-user",services.updateUser);

route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports=route;