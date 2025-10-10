// external module
const express= require('express');
const app= express();
const path= require('path')
const bodyParser= require('body-parser')
const userRouter= require("./router/userRouter");
const hostRouter= require("./router/hostRouter")
const rootDir= require('./utils/pathUtils')


app.use((req, res, next)=>{
  console.log(req.url,req.method);
  next();
})

app.use(express.static(path.join(rootDir,'public')))
app.use(express.urlencoded()) 
app.use(userRouter); 
app.use("/host",hostRouter);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir, 'views', 'page404.html'))
})




app.listen(3000,()=>{
  console.log("App is running at http://localhost:3000");
})
