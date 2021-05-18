// Q23 - Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

const input = require('prompt-sync')()

// Entrada
const kg = Number(input('Valor em quilogramas: '))

// Processamento
const grama = kg * 1000

// Saída
console.log('O valor em gramas é de',grama)