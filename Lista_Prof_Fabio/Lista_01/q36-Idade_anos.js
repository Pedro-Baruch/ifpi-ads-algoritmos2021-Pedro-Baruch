// Q36 - Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

const input = require('prompt-sync')()

// Entrada
const idade_anos = Number(input('Insira dua idade somente em anos: '))
const idade_meses = Number(input('Insira sua idade somente em meses: '))
const idade_dias = Number(input('Insira sua idade somente em dias: '))

// Processamento
const idade = ((idade_anos * 365) + (idade_meses * 30) + idade_dias)

// Saída
console.log('A sua idade somente em dias é',idade,'dias.')