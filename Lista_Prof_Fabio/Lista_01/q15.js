// Q15 - Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

const input = require('prompt-sync')()

// Entrada
const base_triangulo = Number(input('Insira o valor da base do triangulo: '))
const altura_trinagulo = Number(input('Insira o valor da altura do triangulo: '))

// Processamento
const area_triangulo = (base_triangulo * altura_trinagulo) / 2

// Saída
console.log('A área do triangulo é',area_triangulo)