const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Calculo MDC ---')
    let num1 = Number(input('--> '))
    let num2 = Number(input('--> '))

    // Processamento
    let i = 1
    let mdc = 0
    
    while(num1 / i !== 1 && num2 / i !== 1){
        if(num1 % i === 0 && n2 % i === 0){
            mdc = mdc * i
            num1 = num1 / i
            num2 = num2 / i
        }else{
            i++
        }
    }

    // Saída
    console.log(`MDC = ${mdc}`)
}

main()
