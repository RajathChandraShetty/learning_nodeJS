// to work with file system create, read , delete files and folders

const fs = require('fs')

//create a file

// fs.writeFile('phamax.txt', "My present employer company", (err)=>{
//     if(err) 
//         console.log(err);
//     else {
//         console.log('File successfully created');

//         //reading a file
//         // always specify encoding type to avoid buffers while reading
//         fs.readFile('phamax.txt','utf8',(err,file)=>{
//             if (err)
//                 console.log(err);
//             else 
//                 console.log(file);
//         })
//     }
        
// });



// renaming the file 

// fs.rename('phamax.txt','phamax-swiss.txt', (err)=>{
//     if (err)
//         console.log(err);
//     else 
//         console.log('File renamed successfully')
// })



// appending or adding data to the file 

// fs.appendFile('phamax-swiss.txt', 'Will become an unicorn', (err)=>{
//     if (err)
//         console.log(err);
//     else 
//         console.log('New line has been appended to the file');
// });



// removing or deleting a file 

fs.unlink('phamax-swiss.txt', (err)=>{
    if (err)
        console.log(err)
    else
        console.log('Successfully removed from system')
});