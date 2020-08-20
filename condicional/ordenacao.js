//Dado dois números escrever na tela em ordem crescente

const argumento = process.argv.slice(2);

const num1 = parseInt(argumento[0]);
const num2 = parseInt(argumento[1]);
const num3 = parseInt(argumento[2]);

/*

if(num1 > num2) {
    console.log(`${num1} - ${num2}`);
} else {
    console.log(`${num2} - ${num1}`);
}

*/

//Dado três números escrever na tela em ordem crescente

if(num1 <= num2 && num2 <= num3) {
    console.log(`${num1} ${num2} ${num3}`);
} else if (num1 <= num3 && num3 <= num2) {
    console.log(`${num1} ${num3} ${num2}`);
} else if (num2 <= num1 && num1 <= num3) {
    console.log(`${num2} ${num1} ${num3}`);
} else if (num2 <= num3 && num3 <= num1) {
    console.log(`${num2} ${num3} ${num1}`);
} else if (num3 <= num1 && num1 <= num2) {
    console.log(`${num3} ${num1} ${num2}`);
} else if (num3 <= num2 && num2 <= num1) {
    console.log(`${num3} ${num2} ${num1}`);
}