// Q33 - Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.

const input = require('prompt-sync')()

// Entrada
const numero_inteiro = input('Insira um numero inteiro de 3 digitos: ')

// Processamento
const digito1 = (numero_inteiro.charAt(0))
const digito2 = (numero_inteiro.charAt(1))
const digito3 = (numero_inteiro.charAt(2))

const numero_inverso = digito3 + digito2 + digito1

const soma = Number(numero_inteiro) + Number(numero_inverso)

// Saída
console.log('A soma entre',numero_inteiro,'e seu inverso',numero_inverso,'é de',soma)