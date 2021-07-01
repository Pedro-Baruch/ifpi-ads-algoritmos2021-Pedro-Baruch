const input = require('prompt-sync')()

function main(){

    // Entrada
    var idade = Number(input('Qual sua idade?: '))
    console.log('1 = ótimo, 2 = bom, 3 = regular, 4 = péssimo')
    var opniao = Number(input('Opnião sobre o filme: '))

    // Processamento
    let otimo = 0
    let bom = 0
    let regular = 0
    let pesssimo = 0
    let i_otimo = 0
    let i_bom = 0
    let i_regular = 0
    let i_pessimo = 0

    while (!(idade === -1)){
        if(opniao === 1){
            otimo++
            i_otimo = i_otimo + idade
        }else if(opniao === 2){
            bom++
            i_bom = i_bom + idade
        }else if(opniao === 3){
            regular++
            i_regular = i_regular + idade
        }else if(opniao === 4){
            pesssimo++
            i_pessimo = i_pessimo + idade
        }

        var idade = Number(input('Qual sua idade?: '))
        console.log('1 = ótimo, 2 = bom, 3 = regular, 4 = péssimo')
        var opniao = Number(input('Opnião sobre o filme: '))
    }

    let media_i_otimo = i_otimo / otimo
    let total = otimo + bom + regular + pesssimo
    let percentual_bom = (regular / total) * 100

    // Saída
    console.log(`A média de idade das pessoas que acharam o filme ótimo é ${media_i_otimo}`)
    console.log(`A quantidade de pessoas que acharam o filme regular ${regular}`)
    console.log(`O percentual de pessoas que achou o filme bom é de ${percentual_bom}%`)
}

main()