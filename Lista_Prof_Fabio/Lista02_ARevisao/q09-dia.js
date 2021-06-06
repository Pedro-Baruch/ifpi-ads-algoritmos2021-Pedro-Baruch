// Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
// valor deve aparecer valor inválido.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um número correspondente a um dia da semana')
    const numero = Number(input('--> '))

    // Processamento
    if (dia(numero)){
        console.log(`Esse número corresponde a ${dia_semana}`)
    }else{
        console.log('Valor inválido')
    }
}

function dia(valor){
    if (valor === 1){
        dia_semana = 'Domingo'
        return dia_semana
    }else if(valor === 2){
        dia_semana = 'Segunda'
        return dia_semana
    }else if(valor === 3){
        dia_semana = 'Terça'
        return dia_semana
    }else if(valor === 4){
        dia_semana = 'Quarta'
        return dia_semana
    }else if(valor === 5){
        dia_semana = 'Quinta'
        return dia_semana
    }else if(valor === 6){
        dia_semana = 'Sexta'
        return dia_semana
    }else if(valor === 7){
        dia_semana = 'Sábado'
        return dia_semana
    }
}

main()