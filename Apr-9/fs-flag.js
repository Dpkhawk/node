const fs=require('fs')
// fs.writeFile('./text/sub/fetch.js','hil',{flag:'r+'},(err)=>{
//     console.log(err);
// })//replace the given data at begining eg:fetch() to hilch()

// fs.writeFile('./text/sub/fetch.js','hil',{flag:'w+'},(err)=>{
//     console.log(err);
// })//replace all data in the file and put the hil in that page

fs.writeFile('./text/sub/fetch.js','hil',{flag:'a'},(err)=>{
    console.log(err);
})//adds the data at end without replace any of the data in the page

// fs.writeFile('./text/sub/fetch.js','hil',{flag:'a+'},(err,data)=>{
//     console.log(data);
// })//same as flag a but it both read and write