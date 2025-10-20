// external module
const express= require('express');
const app= express();
const path= require('path')
const bodyParser= require('body-parser')
const userRouter= require("./router/userRouter");
const {hostRouter}= require("./router/hostRouter")
const rootDir= require('./utils/pathUtils')
const errorController= require("./controllers/error")



app.use((req, res, next)=>{

  next();
})

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir,'public')))
app.use(express.urlencoded()) 
app.use(userRouter); 
app.use("/host",hostRouter);


app.use(errorController.pageNotFound)







app.listen(3000,()=>{
  console.log("App is running at http://localhost:3000");
})
