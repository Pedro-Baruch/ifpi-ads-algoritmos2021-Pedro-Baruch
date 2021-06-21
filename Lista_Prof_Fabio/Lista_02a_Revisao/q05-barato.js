// Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
// sempre pelo mais barato.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira o preoço de três produtos')
    const produto1 = Number(input('--> '))
    const produto2 = Number(input('--> '))
    const produto3 = Number(input('--> '))

    // Processamento
    const menor = Math.min([produto1],[produto2],[produto3])

    if (menor === produto1){
        console.log(`O produto com valor de ${produto1} é o mais barato`)
    }else if(menor === produto2){
        console.log(`O produto com valor de ${produto2} é o mais barato`)
    }else if(menor === produto3){
        console.log(`O produto com valor de ${produto3} é o mais barato`)
    }
}

main()