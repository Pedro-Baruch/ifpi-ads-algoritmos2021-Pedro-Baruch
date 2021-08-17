// Uma fruteira está vendendo frutas com a seguinte tabela de preços:
// Até 5 Kg                              Acima de 5 Kg
// Morango R$ 2,50 por Kg                R$ 2,20 por Kg
// Maçã R$ 1,80 por Kg                   R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
// morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const macas = Number(input('Kg de maçãs: '))
    const morangos = Number(input('Kg de morangos: '))

    // Processamento
    valor_maças(macas)
    console.log(`${macas} Kg de maçãs custam R$ ${preço_macas.toFixed(2)}`)
    valor_morangos(morangos)
    console.log(`${morangos} Kg de morangos custam R$ ${preço_morangos.toFixed(2)}`)
}

function valor_maças(valor){
    if(valor <= 5){
        preço_macas = valor * 1.80
        return preço_macas
    }else if(valor > 5 && valor < 8){
        preço_macas = valor_maca * 1.50
        return preço_macas
    }else if(valor >= 8){
        preço = valor * 1.50
        desconto = (10/100) * preço
        preço_macas = preço - desconto
        return preço_macas
    }
}

function valor_morangos(valor){
    if (valor <= 5){
        preço_morangos = valor * 2.50
        return preço_morangos
    }else if(valor > 5 && valor < 8){
        preço_morangos = valor * 2.20
        return preço_morangos
    }else if(valor >= 8){
        preço = valor * 2.20
        desconto = (10/100) * preço
        preço_morangos = preço - desconto
        return preço_morangos
    }
}

main()