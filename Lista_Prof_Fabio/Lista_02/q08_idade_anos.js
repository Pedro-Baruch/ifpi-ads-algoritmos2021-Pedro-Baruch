// Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
// sua idade exata (em anos).

const input = require('prompt-sync')()

function main(){

    // Entrada
    const dia_atual = Number(input('Isira a data do dia de hoje: '))
    const mes_atual = Number(input('Isira a data do mes de hoje: '))
    const ano_atual = Number(input('Isira a data do ano de hoje: '))

    const dia_nascimento = Number(input('Isira a data do dia do seu nascimento: '))
    const mes_nascimento = Number(input('Isira a data do mês do seu nascimento: '))
    const ano_nascimento = Number(input('Isira a data do ano do seu nascimento: '))

    // Processamento
    const idade_ano = ano_atual - ano_nascimento
    const idade_mês = mes_atual - mes_nascimento
    const idade_dia = dia_atual - dia_nascimento

    const idade = idade_ano + (idade_mês * 0.1) + (idade_dia * 0.01)

    console.log(idade.toFixed(2))
}

main()