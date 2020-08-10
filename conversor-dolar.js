let dolar, reais, converter
dolar=5
reais=1
converter=reais/dolar

if (reais<=1 && converter<1) {
    console.log(`R$ ${reais} real está valendo $ ${converter} dolar hoje!`)
} else {
    console.log(`R$ ${reais} reais está valendo $ ${converter} dolares hoje!`)
}