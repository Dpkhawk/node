const cookieParser = require('cookie-parser')
const express=require('express')
const app=express()
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.cookie('user','deepak')
    console.log(req.cookies.user);
    res.send('welcome')

})
.listen(2000)