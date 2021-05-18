// Q11 - Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

const input = require('prompt-sync')()

// Entrada
const numero_inteiro = input('Insira um numero inteiro de 3 digitos: ')

// Processamento
const digito1 = (numero_inteiro[0])
const digito2 = (numero_inteiro[1])
const digito3 = (numero_inteiro[2])

const numero_inverso = (digito3 + digito2 + digito1)

// Saída
console.log('O inverso do numero ',numero_inteiro,'é',numero_inverso)