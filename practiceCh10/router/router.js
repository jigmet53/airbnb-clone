const express= require('express');
const router = express.Router();
const path= require('path');
const rootdir= require('../utils/pathUtils');

router.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootdir,'views','home.html'))
})

router.get("/contact-us",(req,res,next)=>
{
  res.sendFile(path.join(rootdir,'views','contactUs.html'))
})

router.post("/Contact-us",(req,res,next)=>
{
  res.sendFile(path.join(rootdir,'views','contactUsAdded.html'))
})

module.exports= router;