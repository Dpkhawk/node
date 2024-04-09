const fs=require('fs/promises')
const path=require('path')
const read=async()=>{
    const result=await fs.readdir('./text')
    const val=result.map(filename=>path.join('./text',filename))
    console.log(result);
    console.log(val);
    const[va]=val
    console.log(va);
    // const sta=val.map(item=> fs.statSync(`${item}`))
    // console.log(sta);
    // sta.map(item=>item.isFile())
    const stat=await fs.stat(`${va}`)
   console.log( stat.isFile())
    
}
read()
// const rename=async()=>{
//     const result=await fs.rename('./txt','./text')
// }
// rename()

const array=[1,2,3,4]
const arr=array
 .map(items=>items*2)
 .filter(item=>item>2)
 console.log(arr);