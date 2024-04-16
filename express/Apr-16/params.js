const express=require('express')
const app=express()
app.get('/users/:id/:name/:age',(req,res)=>{
  console.log(req.params);
  res.send('welcome')
})
.listen(2000)