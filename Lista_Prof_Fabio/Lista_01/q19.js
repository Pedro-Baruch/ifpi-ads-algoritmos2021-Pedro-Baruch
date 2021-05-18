// Q19 - Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * PI * r3) / 3) (PI = 3,14)

const input = require('prompt-sync')()

// Entrada
const raio_esfera = Number(input('Insira o valor do raio: '))

// Processamento
const volume_esfera = 4 * 3.14 * Math.pow(raio_esfera, 3) / 3

// Saída
console.log('O volume da esfera é:',volume_esfera)