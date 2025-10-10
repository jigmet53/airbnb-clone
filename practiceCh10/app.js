const express= require('express');
const router = require('./router/router');
const app=express();
app.use(express.urlencoded({ extended: true }));


app.use(express.urlencoded());
app.use(router);
app.listen(3000,()=>{
  console.log("Server is running at http://localhost:3000");

})