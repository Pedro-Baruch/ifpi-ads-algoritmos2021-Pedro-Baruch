// Q17 - Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

const input = require('prompt-sync')()

// Entrada
const base_retangulo = Number(input('Valor da base do retângulo: '))
const altura_retangulo = Number(input('Valor da altura do retânguo: '))

// Processamento
const area_retangulo = base_retangulo * altura_retangulo

// Saída
console.log('A área do retângulo é:',area_retangulo)