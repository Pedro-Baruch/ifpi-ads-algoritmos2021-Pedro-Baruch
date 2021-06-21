const input = require('prompt-sync')()

function main(){

    // Entrada
    let cidadeA = 200000
    let cidadeB = 800000

    // Processamento
    let contador = 1

    while(cidadeA < cidadeB){
        percentualA = (3.5/100) * cidadeA
        cidadeA = cidadeA + percentualA

        percentualB = (1.35/100) * cidadeB
        cidadeB = cidadeB + percentualB

        contador++
    }

    // Saída
    console.log(`Vai demorar ${contador} dias para cidade A alcançar o número de habitantes da cidade B`)
}

main()