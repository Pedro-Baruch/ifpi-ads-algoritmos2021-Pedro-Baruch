// Q39 - Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
// D = (R + S) / 2 onde R = (A + B)², S = (B + C)²

const input = require('prompt-sync')()

// Entrada
const num_A = Number(input('Insira o valor de A: '))
const num_B = Number(input('Insira o valor de B: '))
const num_C = Number(input('Insira o valor de C: '))

// Processamento
const num_R = Math.pow(num_A + num_B, 2)
const num_S = Math.pow(num_B + num_C, 2)

const num_D = ((num_R + num_S) / 2)

// Saída
console.log('O valor de D é de:',num_D)
