const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nisi, tincidunt sit amet fermentum at, auctor eu mauris. Suspendisse potenti. Morbi rutrum tellus metus, eu lacinia libero feugiat in. Phasellus sed nibh magna. Maecenas tincidunt blandit libero eget vehicula. Mauris ac iaculis augue. Nulla eget turpis porttitor, feugiat purus nec, finibus sapien. Etiam fermentum rhoncus sapien ac mollis. In gravida commodo lobortis. Donec vel nisl massa. In hac habitasse platea dictumst. Mauris dictum tincidunt arcu, sed posuere orci pharetra sed. Vestibulum vitae nisl consectetur mauris consectetur molestie nec id mi.";
const nome = "João PedrO";
const array = [...nome];
const alvo = " ";
let numeroLetras = 0;

//console.log(array);

for(let i = 0 ; i < array.length ; i++){
    if(array[i].toLowerCase() == alvo){     //toLowerCase converte letras para minusculo
        numeroLetras++;
    }
}

console.log(numeroLetras+1);