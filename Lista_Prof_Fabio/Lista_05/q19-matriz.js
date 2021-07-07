const { matrizQaudrada } = require('./matriz')

const input = require('prompt-sync')()

function main(){

    // Entrada
    const ordem = 6

    const matriz = matrizQaudrada(ordem)

    // Formando a matriz
    for(let linha = 0; linha < ordem; linha++){
        for (let coluna = 0; coluna < ordem; coluna++){
            if(linha === 0){
                matriz[linha][coluna] = 1
            }   
            if(coluna === 0){
                matriz[linha][coluna] = 1
            }
            if(linha === (ordem - 1)){
                matriz[linha][coluna] = 1
            }
            if(coluna === (ordem - 1)){
                matriz[linha][coluna] = 1
            }
            if(linha === 1 && coluna > 0 && coluna < (ordem - 1)){
                matriz[linha][coluna] = 2
            }
            if(coluna === 1 && linha > 0 && linha < (ordem-1)){
                matriz[linha][coluna] = 2
            }
            if(linha === (ordem - 2) && coluna > 1 && coluna < (ordem - 1)){
                matriz[linha][coluna] = 2
            }
            if(coluna === (ordem - 2) && linha > 1 && linha < (ordem - 1)){
                matriz[linha][coluna] = 2
            }
            if(linha === 2 && coluna > 1 && coluna < (ordem - 2)){
                matriz[linha][coluna] = 3
            }
            if(linha === 3 && coluna > 1 && coluna < (ordem - 2)){
                matriz[linha][coluna] = 3
            }
        }
    }

    console.table(matriz)


}

main()