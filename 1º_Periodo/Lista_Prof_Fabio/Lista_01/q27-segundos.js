// Q27 - Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
// segundos ele corresponde.

const input = require('prompt-sync')()

// Entrada
const numero_segundos = Number(input('Insira um valor inteiro em segundos: '))

// Processamento
const horas = numero_segundos / 3600
const minutos = (horas%1) * 10
const segundos = (minutos%1) * 10

// Saída
console.log(numero_segundos,'segundos, é igual a',Math.floor(horas),'horas,',Math.floor(minutos),'minutos e',Math.floor(segundos),'segundos.')