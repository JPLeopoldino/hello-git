const http = require('http');
const url = require('url');

const cpu = () =>{
    
};

const servidor = http.createServer((req, res)=>{
    const resultadoUrl = url.parse(req.url, true).query;
    res.write();
    res.end();
})

servidor.listen(8080);