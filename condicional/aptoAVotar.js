//Escrever na tela se uma pessoa está apta a votar quanto
//o ano de nascimento é passado como argumento

const argumento = process.argv.slice(2);

const anoNascimento = parseInt(argumento[0]);

console.log(`--==||Verificador de Voto||==--\n`)

if(anoNascimento < 1920 || anoNascimento > 2020 || anoNascimento < 0){
    console.log(`Erro: Ano de Nascimento Inválido.`)
} else if(anoNascimento <= 1950) {
    console.log(`Você pode votar, mas seu voto NÃO é obrigatório.`)
} else if(anoNascimento <= 2002){
    console.log(`Você pode votar, seu voto é OBRIGATÓRIO.`)
} else if(anoNascimento <= 2004){
    console.log(`Você pode votar, mas seu voto NÃO é obrigatório.`)
} else if(anoNascimento <= 2020){
    console.log(`Você NÃO pode votar.`)
}

console.log(`\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)