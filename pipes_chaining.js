// read & write data efficiently; in chunks rather than all at once

const fs = require('fs');

// linrary for compressing files
const zlib = require('zlib')

// transform stream, receives data and manipulates the data (compress in our case)
//const gzip = zlib.createGzip();

// transform stream, receives data and manipulates the data (compress in our case)
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./example_write.gz','utf8');

// sending the chunks to a new file 
// make sure the correct file type is given (here GZ)
const writeStream = fs.createWriteStream('example_uncompress_write.txt');

// listening to data events
// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
// });

readStream.pipe(gunzip).pipe(writeStream);

