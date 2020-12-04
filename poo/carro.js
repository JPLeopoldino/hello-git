const argumento = process.argv.slice(2);

class Carro{
    constructor(velocidade){
        this.velocidade = velocidade
    }

    acelerar(){
        if(this.velocidade <= 20){
            console.log("Ta devagar ein... acelera mais po!")
        } else if(this.velocidade <= 90){
            console.log("~~Vrummm!")
        } else if(this.velocidade <= 120){
            console.log(`Você passou por um radar à ${this.velocidade}Km/h em uma pista de 90Km/h \n Tomou multa! :-(`)
        } else {
            console.log("Ta muito rápido vai bater!!! \n ~~Crashhhh!!")
        }
    }
}

obejtoCarro = new Carro(argumento);

obejtoCarro.acelerar();