const input = require('prompt-sync')()

function main(){

    // Entrada
    let num = Number(input('N = '))

    // Processamento
    valor_de_s(num)
}

// Processamento
function valor_de_s(num){
    
    let fracao = 0
    let operacao = 0
    
    for(let i = 1; num >= 1; i++){
        
        if(i % 2 === 1){
            fracao = i / num
            operacao = operacao + fracao
            num--
        }else if(i % 2 === 0){
            fracao = i / num
            operacao = operacao - fracao
            num--
        }
    }

    // Saída
    console.log(`O resultado de S é ${operacao}`)
}

main()