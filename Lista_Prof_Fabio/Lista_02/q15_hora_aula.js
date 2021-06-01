// Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
// Escreva na tela qual dos professores tem salário total maior.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira a quantidade de horas dadas pro dois professores e o valor pago pela hora')
    const hora_aula1 = Number(input('Número de horas do professor1 --> '))
    const valor_hora1 = Number(input('Valor pago pela hora primeiro professor --> '))

    const hora_aula2 = Number(input('Número de horas do professor2 --> '))
    const valor_hora2 = Number(input('Valor pago pela hora primeiro professor --> '))

    // Processamento
    const salário1 = hora_aula1 * valor_hora1
    const salário2 = hora_aula2 * valor_hora2

    if (salário1 > salário2){
        console.log('O salário do primeiro professor é maior que do segundo')
    }else{
        console.log('O salário do segundo professor é maior que do primeiro')
    }
}

main()