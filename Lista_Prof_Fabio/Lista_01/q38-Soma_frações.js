// Q38 - Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
// resultado em forma de fração.

const input = require('prompt-sync')()

// Entrada
const numerador_1 = Number(input('Insira o valor do numerador: '))
const denominador_1 = Number(input('Insira o valor do denominador: '))

const numerador_2 = Number(input('Insira o valor do numerador: '))
const denominador_2 = Number(input('Insira o valor do denominador: '))

// Processamento
const calculo_deniminador = denominador_2 * denominador_1

const calculo_numerador1 = (calculo_deniminador / denominador_1) * numerador_1
const calculo_numerador2 = (calculo_deniminador / denominador_2) * numerador_2
const soma_final = calculo_numerador1 + calculo_numerador2

// Saída
console.log('A soma da fração é igual a',soma_final,'/',calculo_deniminador)


