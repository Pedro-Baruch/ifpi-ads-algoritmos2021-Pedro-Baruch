// Q43 - Um sistema de equações lineares do tipo ax + by = c, dx + ey =f, pode ser resolvido segundo mostrado abaixo
// x = (ce - bf) / (ae - bd) , y = (af - cd) / (ae - bd)
// Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.

const input = require('prompt-sync')()

// Entrada
const num_a = Number(input('Insira o valor de A: '))
const num_b = Number(input('Insira o valor de B: '))
const num_c = Number(input('Insira o valor de C: '))
const num_d = Number(input('Insira o valor de D: '))
const num_e = Number(input('Insira o valor de E: '))
const num_f = Number(input('Insira o valor de F: '))

// Processamento
const num_x = ((num_c*num_e) - (num_b*num_f)) / ((num_a*num_e) - (num_b*num_d))
const num_y = ((num_a*num_f) - (num_c*num_d)) / ((num_a*num_e) - (num_b*num_d))

// Saída
console.log('O valor de x é igual a',num_x,'e o valor de y é igual a',num_y)