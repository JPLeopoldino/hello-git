const argumentos = process.argv.slice(2);

//const numero = argumentos[0];
const diaDaSemana = argumentos[1];

const prof1 = 'Barreto'
const profOutro = 'Outro'

//console.log("-=|Verificador de Dezena|=-\n")
//
//if(numero==10){
//    console.log(`${numero} é igual a 10`)
//} else if(numero > 10) {
//    console.log(`${numero} é maior que 10`)
//} else{
//    console.log(`${numero} é menor 10`)
//}
//
//console.log("\n=-=-=-=-=-=-=-=-=-=-=-=")

if(diaDaSemana=='quarta' || diaDaSemana=='quinta'){
    console.log(`Aula com ${prof1}`)
} else{
    console.log(`Aula com ${profOutro}`)
}

/*
seg = 
ter = 
qua = 
qui = 
sex = 
*/