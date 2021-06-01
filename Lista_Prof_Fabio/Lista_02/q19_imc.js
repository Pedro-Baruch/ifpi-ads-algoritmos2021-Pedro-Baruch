// Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
// (IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
// (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Calculo IMC')
    const altura = Number(input('Altura em metros --> '))
    const peso = Number(input('Peso en KG --> '))

    // Processamento
    const calculo_IMC = peso / Math.pow(altura, 2)

    if (calculo_IMC < 25){
        console.log('Você está com peso normal')
    }else if(calculo_IMC > 25 && calculo_IMC < 30){
        console.log('Você está obeso')
    }else if(calculo_IMC > 30){
        console.log('Você está com obesidade mórbida')
    }
}

main()