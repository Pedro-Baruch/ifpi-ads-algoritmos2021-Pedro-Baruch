const input = require('prompt-sync')()

function main(){

    // Entrada
    let numX = Number(input('X = '))
    let numN = Number(input('N = '))

    // Processamento
    let divisao = numX / numN

    while (numX >= 0 && numN > 2){
        numX = divisao
        divisao = numX / numN--
        
    }

    // Saída
    console.log(`A divisão entre ${numX} e ${numN} é: ${divisao}`)

}

main()