const argumentos = process.argv.slice(2);
//console.log(argumentos);

const vetor = [1, 'palavra', 0.9, 3, 10, 9];

//console.log(vetor[1]);

for(let i = 0 ; i < argumentos.length ; i++){
    console.log(`Elemento ${i} = ${argumentos[i]}`);
    //console.log(`Elemento ${i} = ${vetor[i]}`);
}
