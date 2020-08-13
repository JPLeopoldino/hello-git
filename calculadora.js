const argumentos = process.argv.slice(2);

const num1 = parseInt(argumentos[0]);
const num2 = parseInt(argumentos[1]);

//console.log("=-=-=Calculadora Automática=-=-=")
//
//const soma = function(num1, num2){
//    console.log(`A Soma de ${num1} + ${num2} é: ${num1+num2}`);
//}
//const subtracao = function(num1, num2){
//    console.log(`A Subtração de ${num1} - ${num2} é: ${num1-num2}`);
//}
//const multiplicacao = function(num1, num2){
//    console.log(`A Multiplicação de ${num1} * ${num2} é: ${num1*num2}`);
//}
//const divisao = function(num1, num2){
//    console.log(`A Divisão de ${num1} / ${num2} é: ${num1/num2}`);
//}
//const potencia = function(num1, num2){
//    console.log(`A Potência de ${num1} ^ ${num2} é: ${num1/num2}`);
//}
//
//soma(num1, num2)
//subtracao(num1, num2)
//multiplicacao(num1, num2)
//divisao(num1, num2)
//potencia(num1, num2)
//
//console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")

const raiz = function(num1){
    console.log(`Raiz ${Math.cbrt(num1)}`)
}

raiz(num1)