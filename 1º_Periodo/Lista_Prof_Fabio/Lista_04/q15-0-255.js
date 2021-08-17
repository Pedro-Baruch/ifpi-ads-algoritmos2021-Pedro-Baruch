const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Insira um valor entre 0 e 255 ---')
    let numero = Number(input('--> '))

    // Processamento
    let binario = numero.toString(2)
    let hexadecimal = numero.toString(16)
    
    while (!(numero >= 0 && numero <= 255)){
        console.log('Insira um valor válido')
        numero = Number(input('Insira um valor válido: '))
    }

    // Saída
    console.log(`O valor em binário é ${binario}`)
    console.log(`O valor em hexadecimal é ${hexadecimal}`)
}

main()