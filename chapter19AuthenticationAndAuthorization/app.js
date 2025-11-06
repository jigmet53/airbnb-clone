// external module
const express= require('express');
const app= express();
const path= require('path')

const userRouter= require("./router/userRouter");
const authRouter= require("./router/authRouter");
const session= require('express-session');
const mongoDbStore= require('connect-mongodb-session')(session);

const {hostRouter}= require("./router/hostRouter")
const rootDir= require('./utils/pathUtils')
const errorController= require("./controllers/error");
const {default: mongoose}= require('mongoose');


const DB_PATH="mongodb+srv://jigmet:root@jigmet.ajgzrcz.mongodb.net/airbnb?retryWrites=true&w=majority&appName=jigmet";
const store = new mongoDbStore({
  uri: DB_PATH,
  collection:'session',
})

app.use((req, res, next)=>{

  next();
})

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir,'public')))
app.use(express.urlencoded()) 
app.use(session({
  secret:"jigmet lerning",
  resave: false,
  saveUninitialized:true,
  store

}))
// app.use((req, res,next)=>{
//   req.session.isLoggedIn= req.session.isLoggedIn;
//   next();
// })
app.use(userRouter); 
app.use(authRouter); 



app.use("/host",(req, res, next)=>{
  if(req.session.isLoggedIn)
  {
    next();
  }
  else{
     res.redirect("/login")
  }
});
app.use("/host",hostRouter);



app.use(errorController.pageNotFound)






mongoose.connect(DB_PATH).then(()=>{
  console.log("Mongoose connected successfully");

app.listen(3000,()=>{
  console.log("App is running at http://localhost:3000");
})
}).catch(error=>{
  console.log("Error while loading mongoose", error);
})

