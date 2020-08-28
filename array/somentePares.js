const argumentos = process.argv.slice(2);

//const vetorPares = []; //const: possivel alterar de forma indireta
let vetorPares = [];

for(let i = 0 ; i < argumentos.length ; i++){
    if(parseInt(argumentos[i])%2 == 0){
        //console.log(argumentos[i]);
        //vetorPares.push(argumentos[i]); //metodo
        vetorPares = [...vetorPares, argumentos[i]]; //operador spread - operador de espalhamento
    }
}

console.log(vetorPares);
