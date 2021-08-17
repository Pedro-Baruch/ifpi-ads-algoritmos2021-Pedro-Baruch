// Q7 - Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

const input = require('prompt-sync')()

// Entrada
const numero_x = Number(input('Numero X: '))
const numero_z = Number(input('Numero Z: '))
const numero_y = Number(input('Numero Y: '))

// Processamento
const soma_x_z = numero_x + numero_z
const diferença_z_y = numero_z - numero_y

// Saída
console.log('A soma entre X + Z é igual a:',soma_x_z)
console.log('A diferença entre Z - Y é igual a:',diferença_z_y)
