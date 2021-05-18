// Q14 - Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

const input = require('prompt-sync')()

// Entrada
const nota_matematica = Number(input('Nota de matemática: '))
const nota_redação = Number(input('Nota de redação: '))
const nota_fisica = Number(input('Nota de redação: '))

const peso_matematica = Number(input('Peso de matemática: '))
const peso_redação = Number(input('Peso de redação: '))
const peso_fisica = Number(input('Pedro de fisica: '))

// Processamento
const peso = peso_matematica + peso_fisica + peso_redação
const media_pon = ((nota_matematica * peso_matematica) + (nota_redação)) / peso

// Sáida
console.log('A média ponderada é de',media_pon.toFixed(2))

