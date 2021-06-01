// Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
// Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
// sobre os dois valores lidos.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira dois valores')
    const num1 = Number(input('--> '))
    const num2 = Number(input('--> '))
    console.log('Insira a operação que deve ser feita, 1 = Adição, 2 = Subtração, 3 = Multiplicação e 4 = Divisão')
    const operação = Number(input('--> '))

    // Processamento
    if (operação == 1){
        soma = num1 + num2
        console.log(`O resultado da soma é:${soma}`)
    }else if(operação == 2){
        subtracao = num1 - num2
        console.log(`O resultado da subtração é:${subtracao}`)
    }else if(operação == 3){
        multiplicacao = num1 * num2
        console.log(`O resultado da multiplicação é:${multiplicacao}`)
    }else if(operação == 4){
        divisao = num1 / num2
        console.log(`O resultado da divisão é:${divisao.toFixed(2)}`)
    }else{
        console.log('*___*')
    }
}

main()