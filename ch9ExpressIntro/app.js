const express= require('express');
const app=express();
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next)=>{
  console.log("Middleware first  one inside",req.url, req.method);
  next();
});
app.use((req,res,next)=>{
  console.log("Middleware 2 one inside");
  // res.send("<p>hello</p>");
  next();
})
app.get("/",(req,res,next)=>{
  console.log("Middleware 3 one inside");
  res.send("<p>hello</p>");
  next();
})
app.get("/Contact-us",(req,res,next)=>{
  console.log("Middleware 4 one inside");
  res.send(`<form action="/Contact-us" method="POST" >
    <input type="text" name="name" placeholder="Enter name"/>
    <input type="text" name="age" placeholder="Enter age"/>
    <input type="Submit" /></input>
    </form>`);
  // next();
})
app.post("/Contact-us",(req,res,next)=>{
  console.log("post", req.url,req.method, req.body, );
  res.send(`<h1>contact us form submitted</h1>`);
})

app.listen(3000,()=>{
  console.log("Server is running at http://localhost:3000");

})