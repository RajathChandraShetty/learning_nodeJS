const http = require('http')

// http server
const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write('hello Phamax, from nodeJS');
        res.end(); // response gets sent only after executing end()
    }
    else {
        res.write('Outsider!!');
        res.end();
    }
});


// to get the server up & running
//assigning port
server.listen('3000');
