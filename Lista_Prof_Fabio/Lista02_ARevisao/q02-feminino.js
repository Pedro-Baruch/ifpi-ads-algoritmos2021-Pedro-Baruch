// Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um valor o valor M ou F')
    const valor = input('--> ')

    // Processamento
    if (valor === 'M'){
        console.log('Masculino')
    }else if (valor === 'F'){
        console.log('Feminino')
    }else{
        console.log('Sexo inválido')
    }
}

main()