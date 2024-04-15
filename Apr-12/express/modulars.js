const express=require('express')
const app=express.Router()
// const time=(req,res,next)=>{
//     console.log('welcome');
//     next()
// }
// app.use(time)
app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})
app.get('/about',(req,res)=>{
   res.send('<h1>Home page</h1>')
})
module.exports=app