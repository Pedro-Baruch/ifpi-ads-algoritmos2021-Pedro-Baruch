const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Issira um valor para N')
    let numero = Number(input('N = '))

    // Processamento
    
    for(let i = 0; i <= numero; i = i + 2){
        console.log(i)
    }
}

main()