const { matrizQaudrada } = require('./matriz')

const input = require('prompt-sync')()

function main(){

    // Entrada
    const ordem = Number(input('Ordem da matriz quadrada: '))

    const matriz = matrizQaudrada(ordem)

    // Formando a matriz
    for(let linha = 0; linha < ordem; linha++){
        for (let coluna = 0; coluna < ordem; coluna++){
            matriz[linha][coluna] = Number(input(`Valor L:${linha} C:${coluna} -> `))
        }
    }

    // Processamento
    let somaDP = diagonal_principal(matriz,ordem)
    let somaDS = diagona_secundaria(matriz,ordem)
    let soma_total = nao_diagonal(matriz,ordem)

    let somaND = soma_total - (somaDS + somaDP)

    // Saída
    console.log(`Soma diagonal principal ${somaDP}`)
    console.log(`Soma diagonal secundária ${somaDS}`)
    console.log(`Soma das não diagonais ${somaND}`)
    console.table(matriz)

}

function diagonal_principal(matriz,ordem){
    
    let somaDP = 0
    let coluna = 0
    
    for(let linha = 0; linha < ordem; linha++){
        somaDP = somaDP + matriz[linha][coluna]
        coluna++ 
    }
    return somaDP
}

function diagona_secundaria(matriz,ordem){
    
    let somaDS = 0
    let coluna = ordem - 1

    for(let linha = 0; linha < ordem; linha++){
        somaDS = somaDS + matriz[linha][coluna]
        coluna--
    }
    return somaDS
}

function nao_diagonal(matriz,ordem){

    let soma_total = 0

    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            soma_total = soma_total + matriz[linha][coluna]
        }
    }
    return soma_total
}
main()