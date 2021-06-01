// Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const numero1 = Number(input('Insira um número: '))
    const numero2 = Number(input('Insira um número: '))
    const numero3 = Number(input('Insira um número: '))

    // Processamento
    if (numero1 > numero2 && numero1 > numero3){
        console.log(numero1,'é maior que os outros numeros')
    }
    else if (numero2 > numero1 && numero2 > numero3){
        console.log(numero2,'é maior que os outros numeros')
    }
    else if (numero3 > numero1 && numero3 > numero2){
        console.log(numero3,'é maior que os outros numeros')
    }
}

main()