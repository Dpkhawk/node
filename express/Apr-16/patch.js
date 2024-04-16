const express=require('express')
const app=express()
const fs=require('fs')
const details=JSON.parse(fs.readFileSync('./details.json','utf-8'))

app.route('/details/:id?')
   .get((req,res)=>{
    res.status(200).json(
        details
    )
})
    .post((req,res)=>{
        const all=details
        const length=all.details.length;
        console.log(all.details[length-1]);
        const id=all.details[length-1].id
        const newObj={
            id:id+1,
            name:"prakash",
            age:22
        }
        all.details.push(newObj)
        fs.writeFile('./details.json',JSON.stringify(details),(err)=>{
            res.send('posted successfully')
        })
    })
    .patch((req,res)=>{
        const all=details
        const detail=all.details.find(item=>item.id===req.params.id*1)
        const index=all.details.findIndex(item=>item.id===req.params.id*1)
        console.log(index);
        req.body={name:"bhuvi"}
        Object.assign(detail,req.body)
        all.details[index]=detail
        fs.writeFile('./details.json',JSON.stringify(details),(err)=>{
             res.json(details)
        })
        
    })
    .delete((req,res)=>{
        const all=details
        const index=all.details.findIndex(item=>item.id===req.params.id*1)
        console.log(index);
        all.details.splice(index,1)
        fs.writeFile('./details.json',JSON.stringify(details),(err)=>{
            res.send('deleted successfully')
        })
    })
app.listen(2000)
