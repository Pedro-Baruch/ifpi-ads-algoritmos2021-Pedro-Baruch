// Q24 - Leia um valor em m, calcule e escreva o equivalente em cm.

const input = require('prompt-sync')()

// Entrada
const metro = Number(input('Insira o valor em metros: '))

// Processamento
const centimetro = metro * 100

// Saída
console.log('O valor em centimetros é de',centimetro)