let variavel = 10; //ECMAScript6 = ECMAScript2015

variavel = "Valor da variavel";
console.log(variavel);

/*
Comentários de mais de uma linha
declaração de escopo global - var
declaração de escopo local - let
*/

const constante = "Valor da constante";
console.log(constante);

let caseSensitive = 10; //camelcase
let CaseSensitive = 20;

//Float
let real = 299.99; //número real

//Array - Vetor
let vetor = [1, 2, 5, 'Palavra'];
console.log(vetor.length);
console.log(vetor[3]);

let nome = "João"
//Operadores
console.log(`Valor ${2} da data do dia ${nome}`);
//----
console.log(`% = Resto da divisão: ${3%2}`);//resto da divisão
console.log(`Potência ${3**2}`);//Potência
console.log(`Resultado = ${(2+2)/2*10}`);

let n = 2;
n = n + 1;//n++
n = n - 1;//n--
n = n + 2;//n+=2
n = n * 2;//n*=2
console.log(n);

for(n=1;n<11;n++){
    console.log(n)
}
//Teste