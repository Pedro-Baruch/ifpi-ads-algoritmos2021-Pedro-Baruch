const input = require('prompt-sync')()

function main(){

    // Entrada
    let num = Number(input('N = '))

    // Processamento
    let sequencia = 0

    for(let i = 1; i <= num; i++){
        sequencia = sequencia + i
        console.log(sequencia)
    }
}

main()