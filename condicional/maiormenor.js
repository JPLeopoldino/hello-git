const argumento = process.argv.slice(2);

const num1 = parseInt(argumento[0]);
const num2 = parseInt(argumento[1]);

if(num1 > num2){
    console.log(`O maior número é: ${num1}`);
} else if(num2 > num1) {
    console.log(`O maior número é: ${num2}`);
} else {
    console.log(`Os dois números são iguais.`);
}