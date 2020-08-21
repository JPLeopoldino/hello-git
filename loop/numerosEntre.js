const argumento = process.argv.slice(2);

let num1;
let num2;

if(parseInt(argumento[0]) < parseInt(argumento[1])){
    num1 = parseInt(argumento[0]);
    num2 = parseInt(argumento[1]);
} else{
    num1 = parseInt(argumento[1]);
    num2 = parseInt(argumento[0]);
}

const listarNumeros = function(num1, num2){
    for(let i = num1+1 ; i < num2 ; i++){
        console.log(i);
    }
}

const somarNumeros = function(num1, num2){
    let result = 0;
    for(let i = num1+1; i < num2; i++){
        result = result + i;
    }
    console.log(`A soma é: ${result}`);
}

//somarNumeros(num1, num2);

const mediaNumeros = function(num1, num2){
    let soma = 0;
    let contador = 0;
    for(let i = num1+1; i < num2; i++){
        soma = soma + i;
        contador++;
    }
    console.log(`A média é: ${soma/contador}`)
}

somarNumeros(num1, num2);
mediaNumeros(num1, num2);