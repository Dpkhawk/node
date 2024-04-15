const express=require('express')
const app=express()
const fs=require('fs')
const details=JSON.parse(fs.readFileSync('./details.json','utf-8'))
app.get('/details',(req,res)=>{
    res.json(details)
})
.listen(4000)