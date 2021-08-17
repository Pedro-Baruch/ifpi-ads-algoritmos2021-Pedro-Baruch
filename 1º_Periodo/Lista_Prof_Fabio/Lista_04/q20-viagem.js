const input = require('prompt-sync')();

function main() {
    
    // Entrada
    let distancia = Number(input('Insira o valor da distancia percorrida da ultima marcação (KM): '))
    let consumo = Number(input('Insira a quantidade de combustivel consumido (L): '))
    
    // Processamento
    let distancia = 600
    let max_combustivel = 50
    let combustivel_gasto = distancia/consumo
    
    while(consumo > max_combustivel){
        console.log('Consumo maior que 50L, isso é impossivel')
    }
    
    if(distancia >= distancia){
        console.log('Você chegou ao seu destino')
    }else if(consumo == max_combustivel){
        console.log('Você não chegou ao seu destino')
    }else{
        console.log('Você nãp chegou no seu destino mas ainda tem combustivel')
    }
    
    console.log(`Consumo foi de ${combustivel_gasto} KM/L`)
}

main();