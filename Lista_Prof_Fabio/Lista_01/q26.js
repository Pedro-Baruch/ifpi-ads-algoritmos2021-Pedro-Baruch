// Q26 - Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

const input = require('prompt-sync')()

// Entrada
const numero_dia = Number(input('Insira uma quantidade de dias: '))

// Processamento
const semanas = numero_dia / 7
const dias = (semanas%1) * 10

// Saída
console.log(numero_dia,'dias, é igual a',Math.floor(semanas),'semanas e',Math.floor(dias),'dias')