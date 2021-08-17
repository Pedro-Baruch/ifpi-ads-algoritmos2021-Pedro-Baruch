const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('---> Calculo MMC <---')
    const num1 = Number(input('--> '))
    const num2 = Number(input('--> '))

    // Processamento
    let maior = num1 > num2 ? num1 : num2
    let mmc = maior

    while (!(mmc % num1 === 0 && mmc % num2 === 0)){
        mmc = mmc + maior
    }
    
    // Saída
    console.log(`o MMC de ${num1} e ${num2} é: ${mmc}`)
}

main()