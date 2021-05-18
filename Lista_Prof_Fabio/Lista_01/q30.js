// Q30 - Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
// corresponde.

const input = require('prompt-sync')()

// Entrada
const numero_minutos = Number(input('Insira um numero inteiro em minutos: '))

// Processamento
const dias = numero_minutos / 1440
const horas = (dias%1) * 10
const minutos = (horas%1) * 10

// Saída
console.log(numero_minutos,'minutos, corresponde a',Math.floor(dias),'dias,',Math.floor(horas),'horas e',Math.floor(minutos),'minutos.')