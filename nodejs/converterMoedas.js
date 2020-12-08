const http = require('http');
const url = require('url');

const dolar = 5.51;
const euro = 6.43;
const bitcoin = 96699.07;

const converteRealParaDolar = (valor) => {
    return (valor/dolar).toFixed(2);
}

const converteRealParaEuro = (valor) => {
    return (valor/euro).toFixed(2);
}

const converteRealParaBitcoin = (valor) => {
    return (valor/bitcoin).toFixed(8);
}

const server = http.createServer((req, res)=>{
    const query = url.parse(req.url, true).query;
    res.write(`<h1>Conversor de Moedas</h1>`)
    res.write(`<h2>Valor em real = ${query.valorEmReal}</h2>`);
    res.write(`<p>Valor em dolar = ${converteRealParaDolar(query.valorEmReal)}</p>`);
    res.write(`<p>Valor em euro = ${converteRealParaEuro(query.valorEmReal)}</p>`);
    res.write(`<p>Valor em bitcoin = ${converteRealParaBitcoin(query.valorEmReal)}</p>`);
    res.end();
});

server.listen(8080);