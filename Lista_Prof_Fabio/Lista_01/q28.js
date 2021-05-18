// Q27 - Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
// corresponde.

const input = require('prompt-sync')()

// Entrada
const numero_horas = Number(input('Insira um valor inteiro em horas: '))

// Processamento
const semanas = numero_horas / 168
const dias = (semanas%1) * 10
const horas = (dias%1) * 10

// Saída
console.log(numero_horas,'horas, correspondem a',Math.floor(semanas),'semanas,',Math.floor(dias),'dias e',Math.floor(horas),'horas')