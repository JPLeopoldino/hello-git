const texto = "oditrevnI otxeT";
const array = [...texto];
let textoInvertido = "";

for(let i = array.length ; i > 0 ; i--){
    textoInvertido = textoInvertido + array[i-1];
}

console.log(textoInvertido);