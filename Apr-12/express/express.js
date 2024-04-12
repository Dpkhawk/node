const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    // if(req.url==='/'){
        // res.writeHead(200,{'Content-Type':'text/html'})
        res.send('<h1>hello world</h1>')
    // }
    // res.send('<h1>hello</h1>')
})
.listen(2000)

// console.log('welcome');
// setTimeout(()=>console.log('timeout'),2)
// setImmediate(()=>console.log('immediate'),2)
// console.log('welcome');
// console.log('welcome');
// console.log('welcome');
// console.log('welcome');
// console.log('welcome');
// console.log('welcome');





