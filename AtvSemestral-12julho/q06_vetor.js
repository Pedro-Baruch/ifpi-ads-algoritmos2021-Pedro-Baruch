const { maior, menor, positivos, negativos, repetidos, media } = require('./q06_utils')

const input = require('prompt-sync')()

function main(){

    // Entrada
    const ordem = Number(input('Ordem do vetor: '))
    const vetor = Array(ordem)

    // Contruindo vetor
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    // Processamento
    let media_valor = media(vetor)
    let maior_valor = maior(vetor)
    let menor_valor = menor(vetor)
    let positivo = positivos(vetor)
    let negativo = negativos(vetor)
    let repete = repetidos(vetor)

    // Saída
    console.log(`Média dos valolres = ${media_valor}`)
    console.log(`Maior valor: ${maior_valor} // Menor valor: ${menor_valor}`)
    console.log(`Temos ${positivo} números positivos e ${negativo} números negativos`)
    if(repete === true){
        console.log(`Temos valores repetidos`)
    }else if(repete === false){
        console.log(`Não temos valores repetidos`)
    }
}

main()