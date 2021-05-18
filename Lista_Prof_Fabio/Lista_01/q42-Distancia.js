// Q42 - Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
// ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
// D =  √(x2 - x1)² + (y2 - y1)²

const input = require('prompt-sync')()

// Entrada
const ponto1 = input('Insira o valor do de dois pontos quaisquer no plano(formarto x,y): ')
const ponto2 = input('Insira o valor do de dois pontos quaisquer no plano(formarto x,y): ')

// Processamento
const valor_x1 = ponto1[0]
const valor_y1 = ponto1[2]

const valor_x2 = ponto2[0]
const valor_y2 = ponto2[2]

const valor_d = Math.sqrt(((Math.pow(valor_x2 - valor_x1, 2)) + (Math.pow(valor_y2 - valor_y1, 2))))

// Saída
console.log('O distância entre esses pontos é de',valor_d.toFixed(2))