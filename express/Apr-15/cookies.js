const express=require('express')
const app=express()
const session=require('cookie-session')
// const validateCookie= async (req,res,next)=>{
//     await cookieValidator(req.cookies)
//     next()
// }
// app.use(cookieParser())
// app.use(validateCookie())
// app.use((err,req,res,next)=>{
//    res.status(400).send(err.message )
// })
// .listen(2000)


const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
      secure: true,
      httpOnly: true,
      domain: 'example.com',
      path: 'foo/bar',
      expires: expiryDate
    }
  }))

app.get('/',(req,res)=>{
    res.send('<h1>welcome to cookie page</h1>')
})
.listen(2000)