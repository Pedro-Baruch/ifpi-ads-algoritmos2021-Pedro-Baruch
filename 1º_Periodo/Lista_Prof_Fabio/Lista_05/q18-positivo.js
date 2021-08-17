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
    let soma_positivo = 0
    let soma_negativo = 0

    for(linha = 0; linha < ordem; linha++){
        for(coluna = 0; coluna < ordem; coluna++){
            if(matriz[linha][coluna] >= 0){
                soma_positivo = soma_positivo + matriz[linha][coluna]
            }else if(matriz[linha][coluna] < 0){
                soma_negativo = soma_negativo + matriz[linha][coluna]
            }
        }
    }

    // Saída
    console.log('Soma positivo ->',soma_positivo,'Soma negativo ->',soma_negativo)
}

main()