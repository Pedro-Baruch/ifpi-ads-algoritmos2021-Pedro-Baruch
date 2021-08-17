// Q21 - Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

const input = require('prompt-sync')()

// Entrada
const temp_farenheit = Number(input('Insira a temperatura em °F: '))

// Processmento
const temp_celsius = (5 * temp_farenheit - 160) / 9

// Saída
console.log('A temperatura em celsius é de',temp_celsius.toFixed(2))