
const handlerResult=((req,res)=>{
const body=[];
let result=0;

  req.on('data',chunk=>{
    body.push(chunk);
  });
  req.on('end',()=>{
    const bodyStr=Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj= Object.fromEntries(params);
     result= Number(bodyObj.first) +Number(bodyObj.second);
    console.log(Number(bodyObj.first),
     Number(bodyObj.second))
    console.log(result)
       res.setHeader('Content-Type','text/html')
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
    <h1>Welcome to Calculator ${result}</h1>
 

   
    </body>
    </<html>`);
  return res.end();
   
  })
  console.log("sum result page");
 
  // return res.end();

});
module.exports =handlerResult;