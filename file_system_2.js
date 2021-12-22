// working with folders

const fs = require('fs')

// creating a foilder and a file inside it
fs.mkdir('file_system_2', (err)=>{
    if (err)
        console.log(err);
    else {
        console.log('Folder created')

        fs.writeFile('./file_system_2/phamax.txt', 'A great team of people', (err) => {
            if (err) 
                console.log(err);
            else 
                console.log('File has been created');
                
                //unklinking the file to delete folder 
                fs.unlink('./file_system_2/phamax.txt', (err)=>{
                    if (err)
                        console.log(err);
                    else 
                        console.log('Now we can delete the folder')

                        // removing the empty folder
                        fs.rmdir('file_system_2',(err)=>{
                            if (err)
                                console.log(err);
                            else
                                console.log('Folder deleted successfully')
                        });
                });
        });
        
    }
});