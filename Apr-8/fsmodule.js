const filesystem=require('fs')
filesystem.readFile('./txtfiles/first.js','utf-8',(err,result)=>{
    console.log(err);
   console.log(result);

   filesystem.writeFile('./txtfiles/first.js',`${result},age:21`,(err,result)=>{
    console.log(result);
 })
})