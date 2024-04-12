const express=require('express')
const app=express()
const birds=require('./modulars')
console.log(birds);
app.use('/birds',birds)
.listen(2000)