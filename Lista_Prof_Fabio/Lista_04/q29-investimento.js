const input = require('prompt-sync')()

function main(){

    // Entrada
    const investimento = Number(input('Valor do investimento: R$ '))
    const juros = Number(input('Valor do juros em porcentagem: '))

    // Processamento
    ano_investimento(investimento,juros)
}

function ano_investimento(capital,juros){
    
    let i = 's'
    let inves_ano = 0
    let montante = 0
    let calculo
    let taxa_juros = juros / 100

    while(i === 'S' || i === 's'){
        montante = capital * Math.pow((1 + taxa_juros), 12)

        console.log(`O seu investimento após um ano será de R$ ${montante.toFixed(2)}`)
        i = input(`Deseja processar mais um ano? (S/N): `)
    }
}

main()
