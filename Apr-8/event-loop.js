const fs = require('node:fs');

function someAsyncOperation(callback) {
    
  fs.readFile('/path/to/file', callback);
  setTimeout(()=>console.log('welcome'),1000)
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 1000);


someAsyncOperation(() => {
  const startCallback = Date.now();

  
  while (Date.now() - startCallback < 10) {
    
  }
});
// if(null){
//     console.log('welcome');
// }
// else
// console.log('hi');
