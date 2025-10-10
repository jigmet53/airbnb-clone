const express= require('express');
const hostRouter= express.Router();
const path= require('path');
const rootDir= require('../utils/pathUtils')

hostRouter.get("/add-home",(req,res,next)=>{
  res.render( 'addHome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'})


})
const registeredHomes= [];
hostRouter.post("/add-home",(req,res,next)=>{
console.log("jigr",req.body.name);
 
  registeredHomes.push(req.body)
  res.render( 'homeAdded',{pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'})
console.log(registeredHomes);
})
exports.hostRouter= hostRouter;
exports.registeredHomes=registeredHomes;