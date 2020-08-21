const argumento = process.argv.slice(2);
const senhaCerta = 'senac123';

let erros = 0;

for(let i = 0; i < argumento.length; i++){
    if(argumento[i] == senhaCerta){
        console.log(`Você acertou a Senha`)
        break
    } else {
        console.log(`Errrouuuuu!!!`)
        erros++;
    }
    if(erros == 3){
        console.log(`Você errou mais que 3 vezes.`)
        break
    }
}
