const fs=require('fs')
fs.appendFile('./second.txt','hello',(err)=>{
    console.log(err);
})
console.log(__dirname);