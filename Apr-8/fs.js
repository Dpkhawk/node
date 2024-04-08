const fs=require('fs')
fs.open('./txtfiles/first.js',(err,result)=>{
    console.log(result);
})