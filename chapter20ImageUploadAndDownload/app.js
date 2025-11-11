// external module
const express= require('express');
const app= express();
const path= require('path')

const userRouter= require("./router/userRouter");
const authRouter= require("./router/authRouter");
const session= require('express-session');
const mongoDbStore= require('connect-mongodb-session')(session);
const multer= require("multer")

const {hostRouter}= require("./router/hostRouter")
const rootDir= require('./utils/pathUtils')
const errorController= require("./controllers/error");
const {default: mongoose}= require('mongoose');
const fs = require('fs');

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
const randomString=(length)=>{
  const characters='qwertyuiopasdfghjklzxcvbnm';
  let result='';
  for(let i=0;i<length;i++)
  {
    result+=characters.charAt(Math.floor(Math.random()* characters))
  }
  return result;
}
const storage= multer.diskStorage({
    destination:(req, file, cb)=>{
       let uploadPath;
 if (file.mimetype.startsWith('image/')) {
          uploadPath = 'upload';

    } else if (file.mimetype === 'application/pdf') {
     uploadPath=  'rules';
    }
    else {
      uploadPath ='upload/others';
    }
     // Create folder if it doesn't exist
    fs.mkdirSync(uploadPath, { recursive: true });
       cb(null,uploadPath);

  
  },
  filename :(req, file, cb)=>{
    cb(null, randomString(10)+'-'+ file.originalname);
  }

});

const fileFilter=((req, file,cb)=>{
  if(file.mimetype==='image/jpg' || file.mimetype==='image/jpeg' ||file.mimetype==='image/png'||file.mimetype==='application/pdf'){
    cb(null,true);
  }
  else{
    cb(null,false);

  }

})
const multerOptions={
storage, fileFilter
}

app.use(express.static(path.join(rootDir,'public')))
app.use(express.urlencoded()) 
app.use("/upload", express.static(path.join(rootDir,'upload')))
app.use("/host/upload", express.static(path.join(rootDir,'upload')))

app.use("/home/upload", express.static(path.join(rootDir,'upload')))
app.use("/rules", express.static(path.join(rootDir, 'rules')));

const upload= multer(multerOptions);
app.use(upload.fields([
  {name:'photo', maxCount:1},
  {name:'doc', maxCount:1}

]));
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

