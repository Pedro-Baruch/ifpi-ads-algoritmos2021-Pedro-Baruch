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

    // Comparando maior e menor
    let lmaior = 0
    let cmaior = 0
    let lmenor = 0
    let cmenor = 0

    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            if(matriz[i][j] > matriz[lmaior][cmaior]){
                lmaior = i
                cmaior = j
            }else if(matriz[i][j] < matriz[lmenor][cmenor]){
                lmenor = i
                cmenor = j
            }
        }
    }

    console.log(`Maior elemento: ${matriz[lmaior][cmaior]}, na posição Linha (${lmaior}) e coluna (${cmaior})`)
    console.log(`Menor elemento: ${matriz[lmenor][cmenor]}, na posição linha (${lmenor}) e coluna (${cmenor})`)
}

main()