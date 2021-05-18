// Q16 - Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

const input = require('prompt-sync')()

// Entrada
const lado_quadrado = Number(input('Valor do lado do quadrado: '))

// Processamento
const area_quadrado = Math.pow(lado_quadrado, 2)

// Saída
console.log('A área do quadrado é:',area_quadrado)