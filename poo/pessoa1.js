//Abstração
//Classe - modelo
class Pessoa{

    nome = "João Pedro"; //Atributos
    sobrenome = "Leopoldino";
    anoDeNascimento = 1999;

}

objetoJoao = new Pessoa(); //new = Instância de objeto sendo criada
objetoMarcelo = new Pessoa();

console.log(objetoJoao.nome);

console.log(objetoMarcelo.nome);

console.log(`${objetoJoao.nome} ${objetoJoao.sobrenome}`);


