const handler=((req, res)=>{
  console.log(req.url);
  const handlerResult= require('./calculatorresult');
   if(req.url==="/")
  {
    res.setHeader('Content-Type','text/html')
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
    <h1>Welcome to Calculator</h1>
  <a href='/calculator'>Go to Calculator</a>

   
    </body>
    </<html>`);
    return res.end();
  }
  else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST' ){
   return handlerResult(req,res);
 
  }

  else if(req.url==="/calculator")
  {
    console.log(req.url);
    res.setHeader('Content-Type','text/html')
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
    <h1>Welcome to Calculator</h1>
 <form action="/calculate-result" method='POST'>
 <input type='text' name='first' placeholder='enter first No'/>
 <input type='text' name='second' placeholder='enter second No'/>
 <input type='submit' value='sum'/> 
 </form>

   
    </body>
    </<html>`);
    return res.end();
  }
  res.setHeader('Content-Type','text/html')
  res.write(`<html>
  <head><title>Calculator</title></head>
  <body>
  <h1>Page not found</h1>
  </body>
  </<html>`)
  return res.end();

})
module.exports= handler;