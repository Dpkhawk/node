// const eve=require('events')
// const ev=new eve()
// ev.on('start',(name)=>{
//     console.log(`event started ${name}`);
// })
// ev.once('eventonce',()=>console.log('once event'))
// ev.emit('start','deepak')
// ev.emit('start')
// ev.emit('eventonce')
// ev.emit('eventonce')


const fs=require('fs')
fs.readFile('./text/sub/fetch.js',{encoding:'utf-8'},(err,data)=>
{
    console.log(data)
    console.log("File has been read")
    //stored in the - 1st phase
setTimeout(() => {
    console.log("Timer callback is executed")
});
//Stored in 3rd Phase
setImmediate(()=>console.log("Set Immediate is executed"),0)
})