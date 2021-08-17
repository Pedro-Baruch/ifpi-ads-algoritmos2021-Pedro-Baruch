// Q20 - Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

const input = require('prompt-sync')()

// Entrada
const temp_celsius = Number(input('Insira um valor com °C: '))

// Processamento
const temp_fahrenreit = (9 * temp_celsius + 160) / 5

// Saída
console.log('A temperatura',temp_celsius,'em celsius, é igual a',temp_fahrenreit,'em fahrenreit')