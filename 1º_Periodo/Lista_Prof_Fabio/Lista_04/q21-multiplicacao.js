const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Multipliação ---')
    let num1 = Number(input('--> '))
    let num2 = Number(input('--> '))

    // Processamento
    let multipliacao = 0
    let contador = 0

    while(!(num2 === contador)){
        multipliacao = multipliacao + num1 
        contador++ 
    }

    // Saída
    console.log(`A multiplicação entre ${num1} e ${num2} é igual a ${multipliacao}`)
}

main()