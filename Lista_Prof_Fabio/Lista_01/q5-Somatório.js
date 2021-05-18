// Q5 - Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

const input = require('prompt-sync')()

// Entrada
const numero_inteiro = input('Coloque um numero inteiro com 3 digitos: ')

// Processamento
const digito1 = Number(numero_inteiro.charAt(0))
const digito2 = Number(numero_inteiro.charAt(1))
const digito3 = Number(numero_inteiro.charAt(2))

const somatorio = digito1 + digito2 + digito3

// Saída
console.log('a soma dos digitos do numero',numero_inteiro,'é igual a:',somatorio)