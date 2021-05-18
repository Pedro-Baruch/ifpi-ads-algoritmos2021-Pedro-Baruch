// Q29 - Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

const input = require('prompt-sync')()

// Entrada
const numero_meses = Number(input('isira um valor inteiro em meses: '))

// Processamento
const anos = numero_meses / 12
const meses = (anos%1) * 10

// Saída
console.log(numero_meses,'meses, correspondem a',Math.floor(anos),'anos, e',Math.floor(meses),'meses.')