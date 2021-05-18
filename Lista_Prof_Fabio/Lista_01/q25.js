// Q25 - Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

const input = require('prompt-sync')()

// Entrada
const metros = Number(input('Insira aqui um valor inteiro em metros: '))

// Processamento
const quilometros = metros / 1000

// Saída
console.log('O valor em quilômetros é de:',quilometros,'que equivale a',metros,'metros')