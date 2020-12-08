const http = require('http');
const url = require('url');

const servidor = http.createServer((req, res)=>{
    const resultadoUrl = url.parse(req.url, true).query;
    res.write(`<h1>Boa noite, ${resultadoUrl.nome}</h1>`)
    res.end();
});

servidor.listen(8080);