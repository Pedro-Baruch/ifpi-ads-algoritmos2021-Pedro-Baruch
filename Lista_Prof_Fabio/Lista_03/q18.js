const input = require('prompt-sync')()

function main(){

    // Entrada
    let num = Number(input('N = '))

    // Processamento
    let fracao = 0
    let soma = 0

    for(let i = 0; num !== 1; i++){
        fracao = i / num - i
    }

    // Saída
    console.log(soma)
}

main()