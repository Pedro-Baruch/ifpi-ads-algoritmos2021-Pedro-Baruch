const input = require('prompt-sync')()

function main(){

    // Entrada
    const habitantes = Number(input('Quantidade de habitantes: '))

    // Processamento
    cidade(habitantes)
}

function cidade(habitantes){
    
    let salario_mil = 0
    let total_filho = 0
    let total_salario = 0

    for(let i = 1; i <= habitantes; i++){

        console.log('----------------------------------------------------')
        let salario = Number(input('Salário: '))
        let filhos = Number(input('Quantidade de filhos: '))

        total_salario = total_salario + salario
        total_filho = total_filho + filhos

        if(salario >= 1000){
            salario_mil++
        }
    }

    let media_salario = total_salario / habitantes
    let media_filho = total_filho / habitantes
    let percentual = (salario_mil / habitantes) * 100

    // Saída
    console.log(`A média salarial da cidade é R$ ${media_salario.toFixed(2)}`)
    console.log(`A média de filhos da cidade é ${media_filho} filhos`)
    console.log(`${percentual}% tem o salário de R$ 1000.00 ou mais`)

}

main()