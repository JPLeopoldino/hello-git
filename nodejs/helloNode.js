const http = require('http');

const servidor = http.createServer( (req, res)=>{
    res.write('<h1>Hello, Node!</h1>');
    res.end();
});

servidor.listen(8080);