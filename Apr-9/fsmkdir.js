const fs=require('fs/promises')
const create=async()=>{
    const folderName = './users';
    await fs.mkdir(folderName)
}
create()


 

