const express=require('express')
const app=express()
app.all('/',(req,res,next)=>{
    // res.send('<h1>hello world</h1>')
    console.log(req.method);
    res.send('<h1>hello</h1>')
    next()
},
(req,res)=>{
    console.log(req.method,'hi');
    // req.header({'Content-Type':'application.json()'})
    // req.writeHead(200,{'Content-Type':'text/html'})
    res.send('<h2>welcome</h2>')
}
)
.listen(3000)