// Q34 - Leia 3 números, calcule e escreva a média dos números.

const input = require('prompt-sync')()

// Entrada
const numero1 = Number(input('Insira um número: '))
const numero2 = Number(input('Insira um número: '))
const numero3 = Number(input('Insira um número: '))

const media = (numero1 + numero2 + numero3) / 2

// Saída
console.log('A média entre os numeros',numero1,',',numero2,'e',numero3,'é de',media)