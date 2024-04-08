const fs=require('fs/promises')
const stat=async ()=>{
    try{
    const result=await fs.stat('./txtfiles/first.js')
    console.log(result.isFile());
    console.log(result.size);
}
    catch(err){
        console.log(err);
    }
}
stat()


const fsstat=require('fs')
fsstat.stat('./txtfiles/first.js',(err,res)=>{
    console.log(res.isDirectory());
})