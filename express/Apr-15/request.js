const express=require('express')
const app=express()
const timeStamp=(options)=>{
    return (req,res,next)=>{
    console.log(options);
    req.time=Date.now()
    next()
}}
app.use(timeStamp({name:"deepak"}))
app.get('/',(req,res)=>{
    console.log(req.time);
    res.send(`${req.time}`)
})
.listen(2000)