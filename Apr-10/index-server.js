const http=require('http')
const fs=require('fs')
const data=fs.readFileSync('./index.html')
http.createServer((req,res)=>{
   if(req.url==='/home.html'){
    
    
    const datas=fs.readFileSync('./home.html')
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(datas)
   }
   else{
        
        res.end(data) 
   }
})
.listen(2000)
const fs=require('fs/promises')
const read=async()=>{
   const data=await fs.readFile('./text/first.txt','utf-8')
   console.log(data);
}

read()