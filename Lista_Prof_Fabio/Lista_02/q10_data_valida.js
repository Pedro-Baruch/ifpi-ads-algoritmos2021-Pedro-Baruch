// Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira uma data')
    const dia = input('Dia --> ')
    const mes = input('Mês --> ')
    const ano = input('Ano --> ')

    // Processamento
    if(dia < 0 && mes < 0 && ano <0){
        if (dia >= 30 && mes >= 12){
            console.log('É um mês válido')
        }else if(dia >= 31 && mes >= 12){
            console.log('É um mês válido')
        }else{
            console.log('Não é um mês válido')
        }
    }else{
        console.log('Não é um mês válido')
    }
}

main()