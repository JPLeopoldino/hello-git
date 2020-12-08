const http = require('http');
const url = require('url');

const jogadas = ['pedra', 'papel', 'tesoura']

const cpu = () =>{
    const aleatorio = parseInt(Math.random()*3);
    return jogadas[aleatorio];
};

const vencedor = (player, cpu) =>{
    if(player==="tesoura" && cpu==="papel" ||
       player==="papel" && cpu==="pedra"   ||
       player==="pedra" && cpu==="tesoura"){
        return "<h1>Voce Ganhou!!!</h1>";
    } else if(player===cpu){
        return "<h1>Empatou!</h1>"
    } else {
        return "<h1>Voce Perdeu :(</h1>"
    }
};

const servidor = http.createServer((req, res)=>{
    const resultadoUrl = url.parse(req.url, true).query;
    const escolhaCpu = cpu();
    const escolhaPlayer = resultadoUrl.jogada;
    res.write(`<h1>User: ${escolhaPlayer} | PC: ${escolhaCpu}</h1>`);
    res.write(vencedor(escolhaPlayer, escolhaCpu));
    res.end();
})

servidor.listen(8080);