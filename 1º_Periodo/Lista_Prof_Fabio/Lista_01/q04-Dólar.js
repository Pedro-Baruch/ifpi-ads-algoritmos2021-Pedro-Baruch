// Q4 - Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

const input = require('prompt-sync')()

// Entrada
const valor_dolar = Number(input('Valor do dolar: '))
const valor_em_dolar = Number(input('Insira aqui valor em dolar: '))

// Processamento
const valor_real = valor_em_dolar * valor_dolar

// Saída
console.log('O valor em real é de:',valor_real,'reais.')
