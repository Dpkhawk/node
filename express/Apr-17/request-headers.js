const cookieSession = require('cookie-session')
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
   req.header.value='somevalue'
   
   res.send('hello')
})
app.listen(2000)