class Pessoa{
    constructor(nome, sobrenome, anoDeNascimento, altura, peso){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.anoDeNascimento = anoDeNascimento;
        this.altura = altura;
        this.peso = peso; //massa é o correto
    }

    seApresentar(){ // Método
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e minha idade é ${2020-this.anoDeNascimento}`)
    }

    calcularImc(){ //Índice de massa corpórea
        let imc = this.peso/(this.altura*this.altura);
        if(imc >= 30){
            console.log(`IMC: ${imc} - Passou da conta!`)
        } else if(imc >= 25){
            console.log(`IMC: ${imc} - Pouca coisa acima`)
        } else if(imc >= 18.5){
            console.log(`IMC: ${imc} - Tá suave....`)
        } else if(this.altura && this.peso){
            console.log(`IMC: ${imc} - Mete o queixo`)
        }
    }

}

objetoRodrigo = new Pessoa("Rodrigo", "Barreto", 1987, 1.78, 82.5);
objetoPedro = new Pessoa("Pedro", "Alcantara", 1980);
objetoPedro.altura = 1.8;
objetoPedro.peso = 75;

// console.log(objetoRodrigo.nome);
// console.log(`${objetoRodrigo.nome} ${objetoRodrigo.sobrenome} ${objetoRodrigo.anoDeNascimento}`);

objetoRodrigo.seApresentar();
objetoPedro.seApresentar();
objetoRodrigo.calcularImc();
objetoPedro.calcularImc();

//Criar classe carro com um método trocar marcha