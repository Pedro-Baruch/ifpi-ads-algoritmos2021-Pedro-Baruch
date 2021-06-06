// Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
// depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
// 11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
// ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
// quantidade de horas trabalhadas no mês.
// Desconto do IR:
// o Salário Bruto até R$ 900,00 (inclusive) - isento
// o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
// o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
// o Salário Bruto acima de R$ 2.500,00 - desconto de 20%

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira o valor da quantidade de horas que voce trabalhou e o valor de cada hora')
    const horas = Number(input('Número de horas: '))
    const valor_hora = Number(input('Valor da hora: '))

    // Processamento
    const salario_bruto = horas * valor_hora
    const fgts = (11/100) * salario_bruto
    
    console.log('-------------------------------------------------------------')
    if(desconto_ir(salario_bruto)){
        console.log(`O salário bruto é R$ ${salario_bruto},00`)
        console.log(`IR é de ${percentual}% equivale a R$ ${porcentagem},00`)
        console.log(`FGTS é de 11% equivale a R$ ${fgts},00`)
        console.log(`O INSS é de 10% equivale a R$ ${inss},00`)
        console.log(`O valor de desconto é de R$ ${descontos},00`)
        console.log(`O salário liquido é R$ ${salario_liquido},00`)
    }
}

// Processamento
function desconto_ir(valor){
    if (valor <= 900){
        
        inss = (10/100) * valor
        percentual = 0
        porcentagem = 0
        descontos = inss
        salario_liquido = valor - inss
        return (percentual,porcentagem,inss,salario_liquido)
    
    }else if(valor > 900 && valor <= 1500){
        
        inss = (10/100) * valor
        percentual = 5
        porcentagem = (percentual/100) * valor
        descontos = porcentagem + inss
        salario_liquido = valor - descontos
        return(percentual,porcentagem,inss,descontos,salario_liquido)
    
    }else if(valor > 1500 && valor <= 2500){
        
        inss = (10/100) * valor
        percentual = 10
        porcentagem = (percentual/100) * valor
        descontos = porcentagem + inss
        salario_liquido = valor - descontos
        return(percentual,porcentagem,inss,descontos,salario_liquido)
    
    }else if(valor > 2500){
        
        inss = (10/100) * valor
        percentual = 20
        porcentagem = (percentual/100) * valor
        descontos = porcentagem + inss
        salario_liquido = valor - descontos
        return(percentual,porcentagem,inss,descontos,salario_liquido)
    }
}

main()