const http=require('http');
const handler= require('./calculator');

const server= http.createServer(handler);

server.listen(3000,()=>{
  console.log("server is running at http://localhost:3000");
});
 