// Q37 - Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

const input = require('prompt-sync')()

// Entrada
const dias = Number(input('Insira sua idade em dias: '))

// Processamento
const idade_anos = dias / 365
const idade_meses = (idade_anos%1) * 10
const idade_dias = (idade_anos%1) * 10

// Saída
console.log(dias,'dias, equivale a',Math.floor(idade_anos),'anos,',Math.floor(idade_meses),'meses e',Math.floor(idade_dias),'dias')