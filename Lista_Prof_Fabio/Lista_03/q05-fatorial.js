const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Fatorial de N ---')
    let numero = Number(input('N = '))

    // Processamento
    let fatorial = 1

    for(let i = numero; i > 1; i--){
        fatorial = fatorial * i
        console.log(fatorial)
    }
}

main()