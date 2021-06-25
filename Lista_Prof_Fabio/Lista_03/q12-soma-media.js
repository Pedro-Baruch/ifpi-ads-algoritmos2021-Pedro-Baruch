const input = require('prompt-sync')()

function main(){

    // Entrada
    let num = Number(input('N = '))

    // Processamento
    let soma = 0
    let media = 0

    for(let i = 1; i <= num; i++){
        let lista = Number(input('Insira um valor: '))
        
        soma = soma + lista
        media = soma / i
    }
    
    // Saída
    console.log(`A soma é igual a ${soma}, e a média é ${media}`)
    
}

main()