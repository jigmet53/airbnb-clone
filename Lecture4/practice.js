const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
if(req.url==='/home')
{
  res.write('<h1>Welcome to Home</h1>');
  return res.end();
}
if(req.url==='/man')
{
  res.write('<h1>Welcome to Man</h1>');
  return res.end();
}
if(req.url==='/woman')
{
  res.write('<h1>Welcome to Woman</h1>');
  return res.end();
}
if(req.url==='/kid')
{
  res.write('<h1>Welcome to Kid</h1>');
  return res.end();
}
if(req.url==='/cart')
{
  res.write('<h1>Welcome to Cart</h1>');
  return res.end();
}




  res.write(`<html>
  <head>
  My website
  </head>
  <body>
  <head>
  <nav>
  <ul>
  <li>
  <a href="/home">
  
  Home
  </a>
  
  </li>
  <li>
  <a href="/man">
  
  Man
  </a>
  
  </li>
  <li>
  <a href="/woman">
  
  Woman
  </a>
  
  </li>
  <li>
  <a href="/kid">
  
  Kid
  </a>
  
  </li>
  <li>
  <a href="/cart">
  
  Cart
  </a>
  
  </li>
 
  </ul>
  </nav>
  </head>
  </body>
  
  </html>`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
