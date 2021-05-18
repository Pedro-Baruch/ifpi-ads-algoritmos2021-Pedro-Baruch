// Q41 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
// seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
// escreva o custo ao consumidor.

const input = require('prompt-sync')()

// Entrada
const custo_fabrica = Number(input('Insira o valor em R$ do custo de fabrica de uma carro: '))

// Processamento
const custo_distribuidor = custo_fabrica * 28/100
const custo_imposto = custo_fabrica * 45/100

const custo_consumidor = custo_distribuidor + custo_imposto + custo_fabrica

// Sapida
console.log('O consumidor terá que pagar R$',custo_consumidor.toFixed(2))