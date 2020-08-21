const argumento = process.argv.slice(2);
const numero = parseInt(argumento[0]);


console.log(`=-===|Tabuada Automática|===-=`)

for(let i = 1; i <= 10; i++){
    console.log(`\t${numero} x ${i} = ${numero*i}`);
}

console.log(`=-==========================-=`)