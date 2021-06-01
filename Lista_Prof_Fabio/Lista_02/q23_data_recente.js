// Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
// recente.

const Input= require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira duas datas diferentes')
    const dia1 = Number(Input('Primeira data: Dia --> '))
    const mes1 = Number(Input('Primeira data: Mês --> '))
    const ano1 = Number(Input('Primeira data: Ano --> '))

    const dia2 = Number(Input('Segunda data: Dia --> '))
    const mes2 = Number(Input('Segunda data: Mês --> '))
    const ano2 = Number(Input('Segunda data: Ano --> '))

    // Processamento
    if(ano1 >= 2021 && ano2 >= 2021){   
        if (ano1 > ano2){
            console.log('Segunda data é mais recente')
        }else if(ano2 > ano1){
            console.log('Primeira data é mais recente')
        }else if(ano1 === ano2 && mes1 > mes2){
            console.log('Segunda data é mais recente')
        }else if(ano1 === ano2 && mes2 > mes1){
            console.log('Primeira data é mais recente')
        }else if(ano1 === ano2 && mes1 === mes2 && dia1 > dia2){
            console.log('Segunda data é mais recente')
        }else if(ano1 === ano2 && mes1 === mes2 && dia2 > dia1){
            console.log('Primeira data é mais recente')
        }
    }else if(ano1 < 2021 && ano2 < 2021){
        if (ano1 > ano2){
            console.log('Primeira data é mais recente')
        }else if(ano2 > ano1){
            console.log('Segunda data é mais recente')
        }else if(ano1 === ano2 && mes1 > mes2){
            console.log('Primeira data é mais recente')
        }else if(ano1 === ano2 && mes2 > mes1){
            console.log('Segunda data é mais recente')
        }else if(ano1 === ano2 && mes1 === mes2 && dia1 > dia2){
            console.log('Primeira data é mais recente')
        }else if(ano1 === ano2 && mes1 === mes2 && dia2 > dia1){
            console.log('Segunda data é mais recente')
        }
    }
}

main()