const { matrizQaudrada } = require('./matriz')

const input = require('prompt-sync')()

function main(){

    // Entrada
    const ordem = Number(input('Ordem da matriz quadrada: '))

    const matriz = matrizQaudrada(ordem)

    // Formando a matriz
    for(let linha = 0; linha < ordem; linha++){
        for (let coluna = 0; coluna < ordem; coluna++){
            matriz[linha][coluna] = input(`Valor L:${linha} C:${coluna} -> `)
        }
    }

    // Processamento
    
    let matriz_transposta = Array(ordem)
    for(let i =0; i < ordem; i++){
        matriz_transposta[i] = Array(ordem)
    }
    
    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            matriz_transposta[linha][coluna] = matriz[coluna][linha]
        }
    }

    // Saída
    console.table(matriz_transposta)
}

main()