const http= require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/')
  {
    res.setHeader('Content_Type','text/html');
  res.write('<html>');
  res.write('<head><title> My website</title></head>');
  res.write('<body>Welcome to home bye</body>')
  res.write('</html>');
  return res.end();
  }
  else if(req.url==='/product')
  {
    res.setHeader('Content_Type','text/html');
  res.write('<html>');
  res.write('<head><title> My website</title></head>');
  res.write('<body>Welcome to Product page</body>')
  res.write('</html>');
  return res.end();
  }
  res.setHeader('Content_Type','text/html');
  res.write('<html>');
  res.write('<head><title> My website</title></head>');
  res.write('<body>Welcome to home</body>')
  res.write('</html>');
  res.end();
  // console.log(req.url,req.method,req.headers);


  // process.exit();

})

  const PORT=3000;

  server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
  })

