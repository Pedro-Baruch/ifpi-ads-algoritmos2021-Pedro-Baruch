// Q22 - Leia um valor em km, calcule e escreva o equivalente em m.

const input = require('prompt-sync')()

// Entrada
const km = Number(input('Insira um valor em quilometros: '))

// Processamento
const metros = km * 1000

// Saída
console.log('O valor em metros é de',metros)