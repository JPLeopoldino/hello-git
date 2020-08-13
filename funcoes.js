function escreveNaTela(frase){ //camel case
    console.log(frase);
}

//escreveNaTela("Escreve alguma coisa");
//-------------------------
const quadrado = function(num){
    console.log(num*num);
}

//quadrado(2);
//-------------------------
const cubo = function(num){
    console.log(num*num*num);
}

//cubo(2);
//-------------------------

const potencia = function(num, potencia){
    console.log(num**potencia);
}

//potencia(2,3);
//-------------------------

const soma = function(num1, num2){
    return num1+num2;
}

console.log(soma(5,5));