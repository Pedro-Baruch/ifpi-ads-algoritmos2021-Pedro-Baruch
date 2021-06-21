const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Insira um valor ---')
    const numero1 = Number(input('Insira um número --> '))
    
    // Processamento
    let numero2 = Number(input('Insira um número igual ao primeiro --> '))
    
    while (numero1 !== numero2){
    numero2 = Number(input('Insira um número igual ao primeiro --> '))
    }
    
    // Saída
    console.log('O número inserido é igual ao primeiro')
}

main()