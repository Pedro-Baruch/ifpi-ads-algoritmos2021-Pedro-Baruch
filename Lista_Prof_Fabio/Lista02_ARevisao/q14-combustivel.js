// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// 1. Álcool:
// · até 20 litros, desconto de 3% por litro
// · acima de 20 litros, desconto de 5% por litro
// 2. Gasolina:
// · até 20 litros, desconto de 4% por litro
// · acima de 20 litros, desconto de 6% por litro.
// Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
// seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
// o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira a quantidade de litros e o tipo de combustivel(A ou G)')
    const litros = Number(input('Litros --> '))
    const tipo = input('Tipo --> ')

    // Processamento
    const alcool_preço = 1.90 * litros
    const gasolina_preço = 2.50 * litros
    
    if (tipo === 'A'){
        alcool(alcool_preço)
    }else if(tipo === 'G'){
        gasolina(alcool_preço)
    }
}

// Processamento
function alcool(valor){
    if (valor > 0 && valor <= 20){
        preço = valor - ((3/100) * valor)
        console.log(`O preço do alcool será de R$ ${preço.toFixed(2)}`)
    }else if(valor > 20){
        preço = valor - ((5/100) * valor)
        console.log(`O preço do alcool será de R$ ${preço.toFixed(2)}`)
    }

}

// Processamento    
function gasolina(valor){
    if(valor > 0 && valor <= 20){
        preço = valor - ((4/100) * valor)
        console.log(`O preço da gasolina será de R$ ${preço.toFixed(2)}`)
    }else if(valor > 20){
        preço = valor - ((6/100) * valor)
        console.log(`O preço da gasolina será de R$ ${preço.toFixed(2)}`)
    }
}

main()