const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Insira um valor ---')
    const numX = Number(input('--> '))

    console.log(`--- Insira dois números que somados sejam iguais a ${numX}`)
    let num1 = Number(input('--> '))
    let num2 = Number(input('--> '))
    // Processamento
    let soma = num1 + num2

    while (soma !== numX){
        num1 = Number(input('Insira outro número --> '))
        num2 = Number(input('Insira outro número --> '))
        soma = num1 + num2
    }

    // Saída
    console.log(`A soma de ${num1} e ${num2} é igual: ${soma}`)
}


main()