const { matrizQaudrada } = require('./matriz')

const input = require('prompt-sync')()

function main(){

    // Entrada
    const ordem = 5

    const matriz = matrizQaudrada(ordem)

    // Formando a matriz
    let soma = 0
    
    for(let linha = 0; linha < ordem; linha++){
        for (let coluna = 0; coluna < ordem; coluna++){
            soma = soma + 01
            matriz[linha][coluna] = soma
        }
    }

    // Saída
    console.table(matriz)
}

main()