const input = require('prompt-sync')()

function main(){

    // Entrada
    let num_num = 99
    let num_dom = 50

    // Processamento
    let fração = 0
    let soma = 0
    
    for(let i = 0; i <= num_dom; i++){
        fração = i / (i + 2)
        soma = soma + fração
    }

    console.log(`O valor da soma é igual a ${soma}`)
}

main()