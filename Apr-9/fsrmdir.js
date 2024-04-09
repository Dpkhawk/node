const fs=require('fs')
fs.rmdir('./users',{recursive:true},err=>{
    if(err){
        console.log(err);
    }
})
// fs.rm('./users',{recursive:true},(err)=>{
//     console.log(err);
// })