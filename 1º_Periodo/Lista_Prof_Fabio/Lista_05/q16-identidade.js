const { matrizQaudrada } = require('./matriz')

const input = require('prompt-sync')()

function main(){

    // Entrada
    const ordem = Number(input('Ordem da matriz quadrada: '))

    const matriz = matrizQaudrada(ordem)

    // Formando a matriz
    for(let linha = 0; linha < ordem; linha++){
        for (let coluna = 0; coluna < ordem; coluna++){
            if(linha === coluna){
                matriz[linha][coluna] = 1
            }else{
                matriz[linha][coluna] = 0
            }
        }
    }

    console.table(matriz)
}

main()