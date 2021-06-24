const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Soma ---')
    let numero = Number(input('N = '))

    // Processameto
    let soma = 0

    for(let i = 0; i <= numero; i++){
        soma = soma + i
    }
    
    // Saída
    console.log(`Soma = ${soma}`)
}

main()