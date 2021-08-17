const input = require('prompt-sync')()

function main(){

    // Entrada
    const num = Number(input('--> '))

    // Processamento
    let resultado = num / 2
    let contador = 1

    while (resultado >= 1){
        resultado = resultado / 2
        contador++
    }

    // Saída
    console.log(`O resultado é ${resultado}.`)
    console.log(`Foram realizadas ${contador} divisões.`)
}

main()