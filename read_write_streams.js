// read & write data efficiently; in chunks rather than all at once

const fs = require('fs');

const readStream = fs.createReadStream('./example.txt','utf8');

// sending the chunks to a new file 
const writeStream = fs.createWriteStream('example_write.txt');

// listening to data events
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
});

/*
By reading in chunks we dont have to wait for the entire file to load.
Manipulation can be done on each chunk.

Inabove example write op starts before read is complete

Also useful while reading a very large file (buffer overload problem)
*/