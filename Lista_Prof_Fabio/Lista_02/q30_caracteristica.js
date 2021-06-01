// Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
// o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
// milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
// terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
// 2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um valor entre 1000 e 9999')
    const valor = input('--> ')

    // Processamento
    const a = valor[0]
    const b = valor[1]
    const c = valor[2]
    const d = valor[3]

    const milhar_centena = a + b
    const dezena_unidade = c + d

    const operação = Number(milhar_centena) + Number(dezena_unidade) 

    if (valor == Math.pow(operação, 2)){
        console.log('Esse número obedece a caracteristica')
    }else{
        console.log('Esse numero não obedece a caracteristica')
    }
}

main()