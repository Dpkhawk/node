const buffer=Buffer.from('hello world')
const buffer1=Buffer.from('hello world','utf-8')
const buffer2=Buffer.from([1,2,3,4])
for(const buff of buffer2)
console.log(buff);
console.log(buffer1);
console.log(buffer.compare(buffer1));