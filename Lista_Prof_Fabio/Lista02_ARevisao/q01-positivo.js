// Leia um número e mostre na tela se o número é positivo ou negativo.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um número inteiro positivo ou negativo')
    const numero = Number(input('--> '))

    // Processamento
    if (numero > 0){
        console.log('É positivo')
    }else{
        console.log('É negativo')
    }
}

main()