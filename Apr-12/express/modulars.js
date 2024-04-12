const express=require('express')
const app=express.Router()
const time=()=>{
    console.log('welcome');
}
app.use(time)
app.get('/about',(req,res)=>{
   res.send('<h1>Home page</h1>')
})
module.exports=app