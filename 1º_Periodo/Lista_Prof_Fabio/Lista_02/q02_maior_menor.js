// Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const numero1 = Number(input('Insira um número: '))
    const numero2 = Number(input('Insira um numero: '))

    // Processamentor
    if (numero1 > numero2){
        // Saída
        console.log(numero1,'é maior do que',numero2)
    }
    // Se o segundo numeros for maior
    else if (numero2 > numero1){
        // Saída
        console.log(numero2,'é maior do que',numero1)
    }
    // Se os numeros forem iguais
    else{
        // Saída
        console.log(numero1,'é igual a',numero2)
    }
}

main()