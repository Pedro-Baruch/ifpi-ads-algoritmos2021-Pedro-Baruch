const input = require('prompt-sync')()

function main(){

    // Entrada
    const num = Number(input('N = '))

    // Processamento
    valor_de_s(num)
}

function valor_de_s(num){
    let fracao = 0
    let soma = 0

    for(let i = 1; num >= 1; i++){
        fracao = i / num
        soma = soma + fracao
        num--
    }
    // Saída
    console.log(`A soma é igual a ${soma}`)
}

main()