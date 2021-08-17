// Leia um número e escreva se o número é inteiro ou decimal.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um número inteiro ou decimal')
    const numero = Number(input('--> '))

    // Processamento
    const inteiro = Math.trunc(numero)

    if (numero === inteiro){
        console.log('È um número inteiro')
    }else{
        console.log('É um número decimal')
    }
}

main()