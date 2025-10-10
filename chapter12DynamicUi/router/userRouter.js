const express= require('express');
const userRouter= express.Router();
const path= require('path');
const rootDir= require('../utils/pathUtils');
const { registeredHomes } = require('./hostRouter');


userRouter.get("/",(req,res,next)=>{
res.render('home',{registeredHomes:registeredHomes, pageTitle:'airbnb Home'});

console.log("user",registeredHomes);

})
module.exports= userRouter;