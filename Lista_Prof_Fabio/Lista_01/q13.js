// Q13 - Leia um valor em real (R$), calcule e escreva 70% deste valor.

const input = require('prompt-sync')()

// Entrada
const valor_real = Number(input('Insira um valor em R$: '))

// Processamento
const porcentagem = valor_real * 70/100

// Saída
console.log('70% do valor inicial:',porcentagem.toFixed(2))