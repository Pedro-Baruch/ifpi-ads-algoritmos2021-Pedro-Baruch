// Q45 - Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
// decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
// saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
// disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
// notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
// indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
// algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
// critério da distribuição ótima.

const input = require('prompt-sync')()

// Entrada
var valor_saque = Number(input('Insira o valor do saque em R$: '))

// Processamento
var nota50 = 50
var nota10 = 10
var nota5 = 5
var nota1 = 1

nota50 = valor_saque / 50
valor_saque = valor_saque % 50
  
nota10 = valor_saque / 10
valor_saque = valor_saque % 10
  
nota5 = valor_saque / 5
valor_saque = valor_saque % 5
   
nota1 = valor_saque / 1
valor_saque = valor_saque % 1
   
// Saída
console.log(Math.floor(nota50),'notas de 50 reais,',Math.floor(nota10),'notas de 10 reais,',Math.floor(nota5),'notas de 5 reais,',Math.floor(nota1),'notas de 1 real.')
