const express= require('express');
const hostRouter= express.Router();
const path= require('path');
const rootDir= require('../utils/pathUtils')

hostRouter.get("/add-home",(req,res,next)=>{
  res.render( 'addHome',{pageTitle:'airbnb Home Added'})


})
const registeredHomes= [];
hostRouter.post("/add-home",(req,res,next)=>{
console.log("jigr",req.body.name);
 
  registeredHomes.push({housename:req.body.name})
  res.render( 'homeAdded',{pageTitle:'airbnb Home Added'})
console.log(registeredHomes);
})
exports.hostRouter= hostRouter;
exports.registeredHomes=registeredHomes;