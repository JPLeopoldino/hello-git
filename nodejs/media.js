const { verify } = require('crypto');
const http = require('http');
const url = require('url');

const calcularMedia = (vetor)=>{
    console.log(vetor);
    let soma = 0;
    for(let i = 0 ; i < vetor.length; i++){
        soma = soma + parseInt(vetor[i]);
    }
    return (soma/vetor.length).toFixed(1);
}


const server = http.createServer((req, res)=>{
    const query = url.parse(req.url, true).query;
    res.setHeader('Content-Type', 'text/html')
    res.write(`<h2>Aluno ${query.nome}</h2>`);
    res.write(`<p>Media: ${calcularMedia(query.notas)}</p>`);
    res.end();
})

server.listen(8080);

//localhost:8080?nome=Joao&notas=10&notas=7&notas=5