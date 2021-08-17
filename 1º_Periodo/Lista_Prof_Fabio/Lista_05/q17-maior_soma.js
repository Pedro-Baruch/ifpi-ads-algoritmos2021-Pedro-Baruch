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
    let maiors = maiorSoma(matriz)
    let menors = menorSoma(matriz)

    // Saída
    console.table(matriz)
    console.log(`Maior soma ${maiors[1]} na linha ${maiors[0]}`)
    console.log(`Menor soma ${menors[1]} na linha ${menors[0]}`)
}

// Processamento
function maiorSoma(matriz){

    let somaLinha = [0, 0]
    let soma = 0

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            soma = soma + matriz[i][j]  
        }
        if(soma >= somaLinha[1]){
            somaLinha[1] = soma
            somaLinha[0] = i
        }
        soma = 0
    }

    return somaLinha
}

function menorSoma(matriz){

    let somaLinha = [0, 999999999999]
    let soma = 0

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            soma = soma + matriz[i][j]
        }
        if(soma <= somaLinha[1]){
            somaLinha[1] = soma
            somaLinha[0] = i
        }
        soma = 0
    }

    return somaLinha
}

main()
