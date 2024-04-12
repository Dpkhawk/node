const fs=require('fs')

    const readStream=  fs.createReadStream('./first.txt','utf-8')
    .on('data',chunk=>console.log(chunk))
   
    const writeStream= fs.createWriteStream('./second.txt')
    readStream.pipe(writeStream)
    readStream .on('finish',msg=>console.log(msg))

