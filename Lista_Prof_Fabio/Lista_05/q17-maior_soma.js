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
    let maior_s = 0
    let menor_s = 0
    let vetor = Array(ordem)

    for(let i = 0; i < ordem; i++){
        vetor = matriz[i]
    }


    console.log(vetor)
    console.table(matriz)

}

main()
