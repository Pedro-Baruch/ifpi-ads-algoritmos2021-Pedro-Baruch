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
    let transposta = matrizTransposta(matriz,ordem)
    let simetrica = ''

    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            console.log(matriz[linha][coluna],transposta[linha][coluna])
            if(matriz[linha][coluna] !== transposta[linha][coluna]){
                simetrica = 'Não é simétrica'
                break
            }else{
                simetrica = 'È simétrica'
            }
        }
    }

    // Saída
    console.log(simetrica)
}

// Processamento
function matrizTransposta(matriz,ordem){

    let transposta = Array(ordem)
    for(let i =0; i < ordem; i++){
        transposta[i] = Array(ordem)
    }
    
    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            transposta[linha][coluna] = matriz[coluna][linha]
        }
    }
    return transposta
}

main()