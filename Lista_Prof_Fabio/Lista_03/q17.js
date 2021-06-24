const input = require('prompt-sync')()

function main(){

    // Entrada
    let num = Number(input('N = '))

    // Processamento
    let fracao = 0
    let soma = 0

    for(let i = 1; i <= num; i++){
        fracao = 1 / i
        soma = soma + fracao
    }

    // Saída
    console.log(`S = ${soma.toFixed(2)}`)
}

main()