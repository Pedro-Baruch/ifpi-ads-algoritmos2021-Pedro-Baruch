// Leia 3 (três) números e escreva-os em ordem crescente.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const numero1 = Number(input('Insira um numero: '))
    const numero2 = Number(input('Insira um numero: '))
    const numero3 = Number(input('Insira um numero: '))

    // Processamento
    if (numero3 > numero2 && numero2 > numero1){
        console.log('Na ordem crescente fica:',numero1,numero2,numero3)
    }else if(numero3 > numero1 && numero1 > numero2){
        console.log('Na ordem crescente fica:',numero2,numero1,numero3)
    }else if(numero2 > numero3 && numero3 > numero1){
        console.log('Na ordem crescente fica:',numero1,numero3,numero2)
    }else if(numero2 > numero1 && numero1 > numero3){
        console.log('Na ordem crescente fica:',numero3,numero1,numero2)
    }else if(numero1 > numero2 && numero2 > numero3){
        console.log('Na ordem crescente fica:',numero3,numero2,numero1)
    }else if(numero1 > numero3 && numero3 > numero2){
        console.log('Na ordem crescente fica:',numero2,numero3,numero1)
    }else{
        console.log('Os numeros são iguais ou não são numeros')
    }
}

main()