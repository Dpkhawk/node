const fs=require('fs')
setImmediate(()=>console.log('immediate'))
fs.readFile('./first.txt',(err,data)=>{
    console.log('async');
})
setTimeout(()=>{setTimeout(()=>console.log('timeout'),1000);console.log('hi');},0)
// setTimeout(()=>console.log('timeout'),0)

process.nextTick(()=>console.log('tick'))