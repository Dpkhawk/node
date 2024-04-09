const http=require('http')

const server=http.createServer((req,res)=>{
  console.log(req);
  console.log(res);
  if(req.url==='/'){
    res.end('<h1>Home Page</h1>')
  }
  else if(req.url==='/login'){
    res.end('<h1>Login</h1>')
  }
  else
    res.end('<h2>Not found</h2>')
})
server.listen(2000)