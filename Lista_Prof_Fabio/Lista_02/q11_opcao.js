// Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
// valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
// possíveis para a variável opção são 1, 2 e 3.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira o valor da opção de 1 a 3 e tres números')
    const opcao = Number(input('Opção --> '))
    const num1 = Number(input('Número 1 --> '))
    const num2 = Number(input('Número 2 --> '))
    const num3 = Number(input('Número 3 --> '))

    // Processamento
    if (opcao === 1){
        console.log(`Número ${num1}`)
    }else if(opcao === 2){
        console.log(`Número ${num2}`)
    }else if(opcao === 3){
        console.log(`Número ${num3}`)
    }else{
        console.log(`A opção não é 1,2 ou 3`)
    }
}

main()