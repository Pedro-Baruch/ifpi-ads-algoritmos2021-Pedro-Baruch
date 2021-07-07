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
    let multDP = diagonal_principal(matriz,ordem)
    let multDS = diagonal_secundaria(matriz,ordem)
    let determinante = multDP - multDS

    // Saída
    console.log(`A determinante é ${determinante}`)
    console.table(matriz)
}

// Processamento
function diagonal_principal(matriz,ordem){
    
    let multDP = 1
    let coluna = 0
    
    for(let linha = 0; linha < ordem; linha++){
        multDP = multDP * matriz[linha][coluna]
        coluna++ 
    }
    return multDP
}

function diagonal_secundaria(matriz,ordem){
    
    let multDS = 1
    let coluna = ordem - 1

    for(let linha = 0; linha < ordem; linha++){
        multDS = multDS * matriz[linha][coluna]
        coluna--
    }
    return multDS
}

main()