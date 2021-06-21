const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Divisão ---')
    let num1 = Number(input('--> '))
    let num2 = Number(input('--> '))

    // Processamento
    let quociente = 0
    let resto = 0
    let contador = 0

    while(!(num1 === 0)){
        if(num1 >= num2){
            num1 = num1 - num2
            quociente++
            resto = num1
        }else{
            num1 = 0
        }
    }

    // Saída
    console.log(`O quociente é igual a ${quociente}, e o resto é ${resto}`)
}

main()