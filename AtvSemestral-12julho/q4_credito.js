const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Escolha entre as 3 opções de crédito: 40 mil, 60 mil e 81 mil')
    const credito = Number(input('Opção de crédito: '))
    console.log('Escolha entre as 3 opções de parcelas mensais: R$ 1,000 ; R$ 1,200 ; R$ 1,500')
    const parcela = Number(input('Opção de parcela: '))

    // Processamento
    mesesPagando(credito,parcela)
}

function mesesPagando(credito,parcela){

    let meses = 0
    let saldo = credito
    let taxa
    let ultima_parcela
    
    while(saldo > 0){
        meses++
        taxa = (1/100) * saldo
        
        if(parcela >= saldo){
            ultima_parcela = saldo
        }
        // Saída
        console.log(`------------Mês ${meses}----------------------`)
        console.log(`Parcela: R$ ${parcela}`)
        console.log(`Saldo anterior: R$ ${saldo}`)
        console.log(`Taxa = R$ ${taxa}`)
        
        
        // Novo saldo
        saldo = saldo - parcela + taxa
        console.log(`Novo saldo: R$ ${saldo}`)

    }

    console.log('----------------------------------------')
    console.log(`Meses pagando: ${meses}`)
    console.log(`Ultima parcela: ${ultima_parcela}`)
}

main()