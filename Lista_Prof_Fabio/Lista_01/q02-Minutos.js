// Q2 - Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

const input = require('prompt-sync')()

// Entrada
const valor_horas = Number(input('Valor em horas: '))
const valor_minuto = Number(input('Valor em minutos: '))

// Processamento
const valor_horas_min = valor_horas * 60 + valor_minuto

// Saída
console.log('O valor em minutos é: ', valor_horas_min)
