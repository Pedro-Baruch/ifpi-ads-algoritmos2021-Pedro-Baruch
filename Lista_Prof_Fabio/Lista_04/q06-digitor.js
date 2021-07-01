const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Numero de digitos deo número ---')
    const numero = input('--> ')

    // Processamento
    let digitos = Number(numero.length)

    // Saída
    if(numero >= 0){
        console.log(`O numero de digitos é ${digitos}`)
    }else{
        console.log('Isso é uma letra')
    }
}

main()
