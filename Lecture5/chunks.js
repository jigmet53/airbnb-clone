const fs=require('fs');

const body=[];
const userHandler=((req,res)=>{
console.log(req.url);
req.on('data', chunk=>{
  console.log(chunk);
  body.push(chunk);
  
})

req.on('end',()=>{

  const fullbody=Buffer.concat(body).toString();
  const params= new URLSearchParams(fullbody);
  const bodyobject= Object.fromEntries(params);
  fs.writeFileSync('user.txt',JSON.stringify(bodyobject))
});
if(req.url==='/')
{
  res.setHeader('Content_Type','text/html');
res.write('<html>');
res.write('<head><title> My website</title></head>');
res.write('<body>Enter the Details');
res.write('<form action="/submit" method="POST">');
res.write('<input type="text"  name="userName" placeholder="Enter name"/>')
res.write('<br><label  for="male">Male</label> ');
res.write('<input type="radio" id="male" value="male" name="gender"/>')
res.write('<label  for="female">Female</label> ');
res.write('<input type="radio" id="female" value="female" name="gender"/>')
res.write('<br><input type="submit" value="submit"/>');
res.write('</form>');
res.write('</body>');
res.write('</html>');
console.log(req.url);

return res.end();
}
else if(req.url.toLowerCase()==="/submit" && req.method=="POST"){
  // fs.writeFileSync('user.txt', 'Jigmet Rinchen');
  // console.log(req);
  res.statusCode=302;
      res.setHeader('Location','/');
      // return res.end();
    }

// 
 res.end();
});

module.exports= userHandler;