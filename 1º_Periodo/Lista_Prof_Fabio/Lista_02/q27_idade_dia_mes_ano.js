// Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
// nascimento e a data (dia, mês e ano) atual.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const dia_nascimento = Number(input('Dia do nascimento --> '))
    const mes_nascimento = Number(input('Mês do nascimento --> '))
    const ano_nascimento = Number(input('Ano do nascimento --> '))

    const dia_atual = Number(input('Dia atual --> '))
    const mes_atual = Number(input('Mês atual --> '))
    const ano_atual = Number(input('Ano atual --> '))

    // Processamento
    const idade_ano = ano_atual - ano_nascimento
    const idade_mes = mes_atual - mes_nascimento
    const idade_dia = dia_atual - dia_nascimento
    
    if(idade_mes < 0, idade_dia < 0){
        x = idade_ano - 1
        y = idade_mes + 12
        z = idade_dia + 30
        console.log(`Sua idade é ${x} anos, ${y} meses e ${z} dias`)
    }else{
    console.log(`Sua idade é ${idade_ano} anos, ${idade_mes} meses e ${idade_dia} dias`)
    }
}

main()