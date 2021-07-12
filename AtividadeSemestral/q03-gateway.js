const input = require('prompt-sync')()

function main(){

    // Entrada
    const valor_compra = Number(input('Valor da compra: R$ '))
    const dia_receber = Number(input('Deseja receber o pagamento em quantos dias?(2,14,31) '))

    // Processamento
    formaPagamento(valor_compra,dia_receber)
}

function formaPagamento(valor,dia){
     
    let forma_pagamento = Number(input('Qual a foram de pagamento? (1=Crédito,2=A vista) '))
    while(forma_pagamento > 0){
        if(forma_pagamento === 1){
            parcelas = Number(input('Quantas parcelas? (Max 12x) '))
            pagarCredito(valor,dia,parcelas)
            break
        }else if(forma_pagamento === 2){
            pagarVista(valor,dia)
            break
        }else{
            console.log('Insira um valor válido')
            forma_pagamento = Number(input('Qual a foram de pagamento? (1=Crédito,2=A vista) '))
        }
    }
}

// Processamento
function pagarVista(valor,dia){
    let taxa = 0
    let valor_liquido = 0

    if(dia = 2){
        taxa = (4.99/100) * valor + 0.40
        valor_liquido = valor - taxa
    }else if(dia = 14){
        taxa = (3.99/100) * valor + 0.40
        valor_liquido = valor - taxa
    }else if(dia = 31){
        taxa = (2,99/100) * valor + 0.40
        valor_liquido = valor - taxa
    }

    // Saída
    console.log('-------------------------------------')
    console.log(`Valor da compra R$ ${valor}`)
    console.log(`Foma de pagamento: A vista`)
    console.log(`Taxa gateway R$ ${taxa}`)
    console.log(`Valor liquido r$ ${valor_liquido}`)
    console.log(`Quantidade de dias para receber ${dia}`)
}

// Processamento
function pagarCredito(valor,dia,parcelas){
    let taxa = 0
    let valor_liquido = 0
    let percentual_parcelas = ((parcelas)/100) * valor
    
    if(dia = 2){
        taxa = (4.99/100) * valor + 0.40
        valor_liquido = valor - taxa - percentual_parcelas
    }else if(dia = 14){
        taxa = (3.99/100) * valor + 0.40
        valor_liquido = valor - taxa - percentual_parcelas
    }else if(dia = 31){
        taxa = (2,99/100) * valor + 0.40
        valor_liquido = valor - taxa - percentual_parcelas
    }

    // Saída
    console.log('-------------------------------------')
    console.log(`Valor da compra R$ ${valor}`)
    console.log(`Foma de pagamento: Crédito dividido em ${parcelas}x`)
    console.log(`Taxa gateway R$ ${taxa.toFixed(0)}`)
    console.log(`Valor liquido r$ ${valor_liquido}`)
    console.log(`Quantidade de dias para receber ${dia} dias`)
}

main()