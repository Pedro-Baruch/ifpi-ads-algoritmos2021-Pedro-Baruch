// Q6 - Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

const input = require('prompt-sync')()

// Entrada
const valor_km = Number(input('Coloque o valor em KM/H: '))

// Processamento
const valor_ms = valor_km / 3.6

// Saída
console.log(valor_km,'km/h é igual a',valor_ms.toFixed(2),'m/s')
