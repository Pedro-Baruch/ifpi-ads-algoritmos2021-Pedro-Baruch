const input = require('prompt-sync')()

function main(){

    // Entrada
    let num = Number(input('N = '))

    // Processamento
    let quadrado = 0

    for(let i = 0; Math.pow(i, 2) <= num; i++){
        quadrado = i
    }

    // Saída
    console.log(quadrado)
}

main()