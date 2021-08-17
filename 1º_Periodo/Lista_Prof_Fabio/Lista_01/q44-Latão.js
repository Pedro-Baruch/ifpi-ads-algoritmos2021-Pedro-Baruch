// Q44 - Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
// quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
// pelo usuário.

const input = require('prompt-sync')()

// Entrada
const peso_latão = Number(input('Insira o peso do latão em kg: '))

// Processamento
const cobre = peso_latão * 70/100
const zinco = peso_latão * 30/100

// Saída
console.log('Esse latão é constituido por',cobre,'kg de cobre e',zinco,'kg de zinco')