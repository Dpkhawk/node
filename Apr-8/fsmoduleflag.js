const fs=require('fs')
fs.writeFile('./txtfiles/first.js','hi',{flag:'a+'},(err,data)=>{
    console.log(data);
})