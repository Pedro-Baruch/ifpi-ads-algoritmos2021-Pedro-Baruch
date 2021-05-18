// Q8 - Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Primeiro numero: '));
const numero_2 = Number(input('Segundo numero: '));

// Processamento
const soma = numero_1 + numero_2
const subtração = numero_1 - numero_2
const divisão = soma / subtração

// Saída
console.log('A divisão da soma pela subtração dos números é:',divisão.toFixed(2))