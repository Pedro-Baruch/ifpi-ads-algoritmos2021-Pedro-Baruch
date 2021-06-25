const input = require('prompt-sync')()

function main(){

    // Entrada
    const num = Number(input('N = '))

    // Processamento
    valor_de_s(num)
}

function valor_de_s(num){
    
    let fracao = 0
    let operacao = 0
    
    for(let i = 1; i <= num; i++){
        if(i % 2 === 1){
            fracao = 1 / i
            operacao = operacao + fracao
            num--   
        }else if(i % 2 === 0){
            fracao = 1 / i
            operacao = operacao - fracao
            num--
        }
    }

    // Saída
    console.log(`S é igual a ${operacao}`)
}

main()