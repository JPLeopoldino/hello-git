module.exports = {
    calcularMedia: function(notas){
        let soma = 0;
        for(let i = 0 ; i < notas.length ; i++){
            soma = soma + parseInt(notas[i]);
        }
        return soma/notas.length;
    }
}