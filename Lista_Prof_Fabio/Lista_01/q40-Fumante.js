// Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
// fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

const input = require('prompt-sync')()

// Entrada
const anos_fumando = Number(input('Número de anos fumando: '))
const cigarros_por_dia = Number(input('Número de cigarros fumados por dia: '))
const preço_carteira = Number(input('Preço da carteira de cigarro: '))

// Processamento
const cigarros_ano = cigarros_por_dia * 365
const numero_de_cigarro = cigarros_ano * anos_fumando
const preço_gasto = numero_de_cigarro / 20
const valor_final = preço_gasto * preço_carteira

// Saída
console.log('O fumante ja gastou R$',valor_final.toFixed(2),'em cigarro.')