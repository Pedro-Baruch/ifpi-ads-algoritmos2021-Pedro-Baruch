// Q10 - Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.

const input = require('prompt-sync')();

// Entrada
const numero_X = Number(input('Insira uma número: '))
const numero_Y = Number(input('Insira outro número: '))

// Processamento
const divisão = numero_X / numero_Y
const sobra = numero_X % numero_Y

// Saída
console.log('O quociente da divisão entre',numero_X,'e',numero_Y,'é de',divisão,'com resto',sobra)