const input = require('prompt-sync')()

function main(){

    // Entrada
    const leitura_atual = Number(input('Quantida de KW/h atual: '))
    const leitura_anterior = Number(input('Quantidade de KW/h anterior: '))

    // Processamento
    preço_tarifa(leitura_atual)
    impostos(tarifa)
    iluminacao_publica(tarifa,leitura_atual)
    const bandeira = (leitura_atual/100) * 8 
    const valor_total = tarifa + bandeira + icms + pis_confis + iluminacao
    
    // Saída
    if(leitura_atual <= 30){ // Caso o consumo seja inferior a 30 KW/h apenas essa saída ira ser exibida
        console.log('Insento de tarifa')
    }else{ // Será exibida sempre que condição anterior não for obedecida
        console.log(`Consumo: ${leitura_atual}`)
        console.log(`Valor Faturado: ${valor_total}`)
        console.log(`Bandeira(Amarela 2): ${bandeira}`)
        console.log(`ICMS: ${icms}`)
        console.log(`PIS/CONFIZ: ${pis_confis}`)
        console.log(`Taxa iluminação pública: ${iluminacao}`)
    }
}

// Processamento
function preço_tarifa(valor){ // Valor da tarifa de acordo com as taxas
    if(valor <= 30){
        tarifa = 0
        return tarifa
    }else if(valor <= 100){
        tarifa = valor * 0.59
        return tarifa
    }else if(valor > 100){
        tarifa = valor * 0.75
        return tarifa
    }
}

function impostos(valor){ // Calculo para ICMS e PIS/CONFIS
    icms = 25/100 * valor
    pis_confis = 15/100 * valor
    return icms,pis_confis
}

function iluminacao_publica(valor1,valor2){ // Calculo ilumição publica sem os impostos
    if(valor2 <= 80){
        iluminacao = 0
        return iluminacao
    }else if(valor2 > 80){
        iluminacao = 6/100 * valor1
        return iluminacao
    }
}

main()