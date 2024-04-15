const express=require('express')
const app=express()
app.use('/home',express.static('./public'))
.listen(2000)