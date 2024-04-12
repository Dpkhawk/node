const http=require('http')
const fs=require('fs')
const body=[]
const server=http.createServer((req,res)=>{
    req.method='POST'
    const {method,url,headers}=req
    console.log(method,url,headers);
    
    req
    .on('data',(item)=>{
     body.push(item)
    })
    .on('error',(err)=>{
        console.log(err);
    })
    .on('error', err => {
    console.error(err);
    });
    const fetch=fs.readFileSync('./text/first.txt','utf-8')
    const item=[1,2,3,fetch]
    // req.emit('data',item)
    res.writeHead(200,{'Content-Type':'application.json'})
    
    const response={headers,method,url,body}
    res.write(`<h1>${method}</h1>`)
    res.end()
    console.log(body);
    // body.map(item=>res.end(`<h1>${item}</h1>`))
    
})
server.listen(2000)




