const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um valor para N')
    let numero = Number(input('N = '))

    // Processamento
    
    for (let i = 0; i <= numero; i++){
        console.log(i)
    }
}

main()