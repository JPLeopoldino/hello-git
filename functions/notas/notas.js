const utilitaria = require('./utils');

const argumento = process.argv.slice(2);
const valores = [1, 3, 4, 2];


const media = utilitaria.calcularMedia(argumento);
console.log(utilitaria.calcularMedia(valores));
utilitaria.calcularMedia([7, 5, 2, '2', '4']);

console.log(media)