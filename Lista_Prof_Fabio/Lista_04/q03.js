const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Calculo MDC ---')
    const num1 = Number(input('--> '))
    const num2 = Number(input('--> '))

    // Processamento
    let numero = 1
    
    while (!(numero % num1 === 0 && numero % num2 === 0)){
        numero++
    }

    // Saída
    console.log(`O MDC entre ${num1} e ${num2} é: ${numero}`)
}

main()
