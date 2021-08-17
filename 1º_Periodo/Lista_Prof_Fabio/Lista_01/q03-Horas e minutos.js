// Q3 - Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

const input = require('prompt-sync')()

// Entrada
const valor_minuto = Number(input('Valor em minuto: '))

// Processamento
const valor_hr = valor_minuto / 60
const minuto = (valor_hr%1) * 60

// Saída
console.log('O valor em horas será de:',Math.floor(valor_hr), 'horas',minuto, 'minutos')
