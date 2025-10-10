
const http= require('http');
const userHandler = require('./chunks');

const server=http.createServer(userHandler);

server.listen(3000,()=>{
  console.log('server is running at http://localhost:3000');
});
