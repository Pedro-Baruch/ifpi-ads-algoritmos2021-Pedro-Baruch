// O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
// Até 5 Kg                                             Acima de 5 Kg
// File R$ 4,90 por Kg                                  R$ 5,80 por Kg
// Alcatra R$ 5,90 por Kg                               R$ 6,80 por Kg
// Picanha R$ 6,90 por Kg                               R$ 7,80 por Kg
// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção,
// porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o
// cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo
// e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da
// compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const quantidade = Number(input('Kg --> '))
    const tipo = input('F = (filé),A = (alcatra) e P = (picanha)--> ')
    const cartão = input('Compra feita com cartão tabajara? S(sim) e N(não) : ')

    // Processamento
    preço_carnes(quantidade,tipo,cartão)
    
    // Saída
    console.log(`${quantidade} kg de tipo ${tipo_carne}`)
    console.log(`R$ ${preço.toFixed(2)} no total`)
    console.log(`Pagamento por: ${pago}`)
    console.log(`Desconto de: R$ ${desconto.toFixed(2)}`)
    console.log(`Valor a pagar: R$ ${preço_final.toFixed(2)}`)
}

// Processamento
function preço_carnes(valor_kg,valor_tipo,pagamento){
    if(pagamento === 'S'){
        if(valor_tipo === 'F'){
            if(valor_kg <= 5){
                pago = 'Cartão Tabajara'
                tipo_carne = 'Filé'
                preço = 4.90 * valor_kg
                desconto = 5/100 * preço
                preço_final = preço - desconto
                return(preço_final,desconto,preço,tipo_carne,pago)
            
            }else if(valor_kg > 5){
                pago = 'Cartão Tabajara'
                tipo_carne = 'Filé'
                preço = 5.80 * valor_kg
                desconto = 5/100 * preço
                preço_final = preço - desconto
                return(preço_final,desconto,preço,tipo_carne,pago)
            }
        }else if(valor_tipo === 'A'){
            if(valor_kg <= 5){
                pago = 'Cartão Tabajara'
                tipo_carne = 'Alcatra'
                preço = 5.90 * valor_kg
                desconto = 5/100 * preço
                preço_final = preço - desconto
                return(preço_final,desconto,preço,tipo_carne,pago)
            
            }else if(valor_kg > 5){
                pago = 'Cartão Tabajara'
                tipo_carne = 'Alcatra'
                preço = 6.80 * valor_kg
                desconto = 5/100 * preço
                preço_final = preço - desconto
                return(preço_final,desconto,preço,tipo_carne,pago)
            }
        }else if(valor_tipo === 'P'){
            if(valor_kg <= 5){
                pago = 'Cartão Tabajara'
                tipo_carne = 'Picanha'
                preço = 6.90 * valor_kg
                desconto = 5/100 * preço
                preço_final = preço - desconto
                return(preço_final,desconto,preço,tipo_carne,pago)
            
            }else if(valor_kg > 5){
                pago = 'Cartão Tabajara'
                tipo_carne = 'Picanha'
                preço = 7.80 * valor_kg
                desconto = 5/100 * preço
                preço_final = preço - desconto
                return(preço_final,desconto,preço,tipo_carne,pago)
            }
        }
    }else if(pagamento === 'N'){
        if(valor_tipo === 'F'){
            if(valor_kg <= 5){
                pago = 'Dinheiro'
                tipo_carne = 'Filé'
                preço = valor_kg * 4.90
                desconto = 0
                preço_final = preço
                return(preço_final,desconto,preço,tipo_carne,pago)
            
            }else if(valor_kg > 5){
                pago = 'Dinheiro'
                tipo_carne = 'Filé'
                preço = valor_kg * 5.80
                desconto = 0
                preço_final = preço
                return(preço_final,desconto,preço,tipo_carne,pago)
            }
        }else if(valor_tipo === 'A'){
            if(valor_kg <= 5){
                pago = 'Dinheiro'
                tipo_carne = 'Alcatra'
                preço = valor_kg * 5.90
                desconto = 0
                preço_final = preço
                return(preço_final,desconto,preço,tipo_carne,pago)
            
            }else if(valor_kg > 5){
                pago = 'Dinheiro'
                tipo_carne = 'Alcatra'
                preço = valor_kg * 6.80
                desconto = 0
                preço_final = preço
                return(preço_final,desconto,preço,tipo_carne,pago)
            }
        }else if(valor_tipo === 'P'){
            if(valor_kg <= 5){
                pago = 'Dinheiro'
                tipo_carne = 'Picanha'
                preço = valor_kg * 6.90
                desconto = 0
                preço_final = preço
                return(preço_final,desconto,preço,tipo_carne,pago)
            
            }else if(valor_kg > 5){
                pago = 'Dinheiro'
                tipo_carne = 'Picanha'
                preço = valor_kg * 7.80
                desconto = 0
                preço_final = preço
                return(preço_final,desconto,preço,tipo_carne,pago)
            }
        }
    }
}


main()