// Q35 - Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem.

const input = require('prompt-sync')()

// Entrada
const numero_inteiro = input('Insira um numero de 4 digitos: ')

// Processamento
const digito1 = Number(numero_inteiro.charAt(0))
const digito2 = Number(numero_inteiro.charAt(1))
const digito3 = Number(numero_inteiro.charAt(2))
const digito4 = Number(numero_inteiro.charAt(3))

const soma = digito1 + digito2 + digito3 + digito4

// Saída
console.log('A soma dos elementos do numero',numero_inteiro,'é igual a',soma)