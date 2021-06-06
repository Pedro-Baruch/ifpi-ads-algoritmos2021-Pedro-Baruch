// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
// contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
// salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// o salários até R$ 280,00 (incluindo) : aumento de 20%
// o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// o salários de R$ 1500,00 em diante : aumento de 5% 
// Após o aumento ser realizado, informe na tela:
// · o salário antes do reajuste;
// · o percentual de aumento aplicado;
// · o valor do aumento;
// · o novo salário, após o aumento.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira o valor do salário do colaborador')
    var salaraio = Number(input('--> '))

    // Processamento
    if (salaraio <= 280){
        percentual = 20
        porcentagem = (percentual/100) * salaraio
        salaraio_reajuste = porcentagem + salaraio
    }else if(salaraio > 280 && salaraio <= 700){
        percentual = 15
        porcentagem = (percentual/100) * salaraio
        salaraio_reajuste = porcentagem + salaraio
    }else if(salaraio > 700 && salaraio <= 1500){
        percentual = 10
        porcentagem = (percentual/100) * salaraio
        salaraio_reajuste = porcentagem + salaraio
    }else if(salaraio > 1500){
        percentual = 5
        porcentagem = (percentual/100) * salaraio
        salaraio_reajuste = porcentagem + salaraio
    }

    // Saída
    console.log(`O salário antes do aumento é igual a ${salaraio} reais.`)
    console.log(`O percentual de reajuste é ${percentual}%.`)
    console.log(`O valor do aumento é ${porcentagem} reais.`)
    console.log(`O salário final é ${salaraio_reajuste} reais.`)
}

function reajuste(){

}

main()