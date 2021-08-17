// Q12 - Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

const input = require('prompt-sync')()

// Entrada
const salario = Number(input('Salário em R$: '))

// Processamento
const aumento = salario * 25/100
const novo_salario = salario + aumento

// Saída
console.log('O seu novo salário é:', novo_salario)