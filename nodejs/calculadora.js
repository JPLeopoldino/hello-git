const http = require('http');
const url = require('url');

// Calculos
const soma = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2); }

const subtracao = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2); } //clean code

const multiplicacao = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2); }

const divisao = (num1, num2)=>{
    return parseFloat(parseInt(num1) / parseInt(num2)).toFixed(2); }

const potencia = (num1, num2)=>{
    return Math.pow(parseInt(num1), parseInt(num2)); }

const raiz = (num1, num2)=>{
    return parseFloat( Math.pow(parseInt(num1), 1/parseInt(num2)) .toFixed(2)); }


// Escolhe a Operação e retorna o resultado
const escolheOperacao = (parametros) =>{
    if(parametros.op == 'soma'){
        return (`${parametros.numero1} + ${parametros.numero2} = ${soma(parametros.numero1, parametros.numero2)}`);
    } else if(parametros.op == 'sub'){
        return (`${parametros.numero1} - ${parametros.numero2} = ${subtracao(parametros.numero1, parametros.numero2)}`);
    } else if(parametros.op == 'mult'){
        return (`${parametros.numero1} * ${parametros.numero2} = ${multiplicacao(parametros.numero1, parametros.numero2)}`);
    } else if(parametros.op == 'div'){
        return (`${parametros.numero1} / ${parametros.numero2} = ${divisao(parametros.numero1, parametros.numero2)}`);
    } else if(parametros.op == 'pow'){
        return (`${parametros.numero1} ^ ${parametros.numero2} = ${potencia(parametros.numero1, parametros.numero2)}`);
    } else if(parametros.op == 'raiz'){
        return (`${parametros.numero1} pela raiz ${parametros.numero2} = ${raiz(parametros.numero1, parametros.numero2)}`);
    } 
}

// Usuário digita valores a serem calculados
const servidor = http.createServer((req, res)=>{
    const resultadoUrl = url.parse(req.url, true).query;
    // res.write(`<h1>${resultadoUrl.numero1} ${resultadoUrl.numero2}</h1>`)
    res.write(`<h1>Resultado: ${escolheOperacao(resultadoUrl)}</h1>`);
    res.end();
})

servidor.listen(8080);