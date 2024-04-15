const express=require('express')
const app=express()
app.get('/user/:id', (req, res, next) => {
    console.log('ID:', req.params.id)
    next('route')//skips the next User info and prints the req.params.id
  }, (req, res, next) => {
    res.send('User Info')
  })
  
  
  app.get('/user/:id', (req, res, next) => {
    res.send(req.params.id)
  })
  .listen(2000)