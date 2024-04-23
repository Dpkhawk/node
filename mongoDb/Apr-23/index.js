const express=require('express')
const mongoose=require('mongoose');
const nodemon = require('nodemon');
const app=express()
const data=mongoose.connect('mongodb://localhost:27017/newDb')
.then((data)=>{
    console.log('connected successfully');
})
.catch(()=>{
    console.log('error in connecting');
})
const userSchema=new mongoose.Schema({
    _id:{
    type:String,},
    name:{
        type:String
    },
    age:{
        type:Number
    }
},
)
const User=mongoose.model('User',userSchema)
User.aggregate({$lookup:{from:"orders",localField:"orders",foreignField:"_id",as:"orderDetails"}}).then(data=>console.log(data))

app.route('/datas/:id?')
   .get((req,res)=>{
    if(!req.params.id){
    User.find()
    .then((data)=>{
      res.json(data)
    })
}
else{
    const name=req.params.id
    User.find({name:name})
    .then((data)=>{
      res.json(data)
    })
  }})
  .delete((req,res)=>{
    User.deleteOne({name:req.params.id})
    res.send('deleted')
  })
  .put((req,res)=>{
    const value=req.params.id
    User.updateOne({name:value},{$set:{age:28}})
    .then(()=>res.send('hi'))
    
  })
  .post((req,res)=>{
    User.create({_id:99,name:'bhavesh',age:"22"})
    res.send('inserted')
  })
app.listen(2000,()=>{
   console.log('running in port 2000'); 
})