// Q18 - Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * PI * r)

const input = require('prompt-sync')()

// Entrada
const raio_circunferencia = Number(input('Insira o valor do raio: '))

// Processamento
const comprimento_circunferencia = 2 * Math.PI * raio_circunferencia

// Saída
console.log('O comprimento da cicunferencia é:',comprimento_circunferencia)