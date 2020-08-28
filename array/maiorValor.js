const argumentos = process.argv.slice(2);

/*
let menor = argumentos[0];

for(let i = 0 ; i < argumentos.length ; i++){
    if(menor > parseInt(argumentos[i])){
        menor = argumentos[i];
    }
    console.log(`${i} = ${menor}`);
}

console.log(menor);
*/

//Altere esse código para que ele exiba na tela tanto o menor valro quanto o maior valor do vetor

let menor = argumentos[0];
let maior = 0;

for(let i = 0 ; i < argumentos.length ; i++){
    if(maior < parseInt(argumentos[i])){
        maior = argumentos[i];
    }
    if(menor > parseInt(argumentos[i])){
        menor = argumentos[i];
    }
}

console.log(`=-=-=|Maior e Menor|=-=-=`);
console.log(`O maior número é: ${maior}\nO menor número é: ${menor}`);
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`);