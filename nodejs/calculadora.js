const http = require('http');
const url = require('url');

const soma = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const subtracao = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
} //clean code

const escolheOperacao = (parametros) =>{
    if(parametros.op == 'soma'){
        return soma(parametros.numero1, parametros.numero2);
    }
    else if(parametros.op == 'sub'){
        return subtracao(parametros.numero1, parametros.numero2);
    }
}

const servidor = http.createServer((req, res)=>{
    const resultadoUrl = url.parse(req.url, true).query;
    res.write(`<h1>Resultado: ${escolheOperacao(resultadoUrl)}</h1>`);
    res.end();
})

servidor.listen(8080);