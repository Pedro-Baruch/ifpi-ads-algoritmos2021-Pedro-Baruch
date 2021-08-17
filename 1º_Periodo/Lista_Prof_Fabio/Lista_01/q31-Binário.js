// Q34 - Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

const input = require('prompt-sync')()

// Entrada
const numero_binário = input('Insira um valor de 4 digitos na base binária: ')

// Processamento
const digito1 = Number(numero_binário.charAt(0))
const digito2 = Number(numero_binário.charAt(1))
const digito3 = Number(numero_binário.charAt(2))
const digito4 = Number(numero_binário.charAt(3))

const decimal = ((digito1 * Math.pow(2, 3)) + (digito2 * Math.pow(2, 2)) + (digito3 * Math.pow(2, 1)) + (digito4 * Math.pow(2, 0)))

// Saída
console.log(numero_binário,'em binário, é igual',decimal,'em decimal.')