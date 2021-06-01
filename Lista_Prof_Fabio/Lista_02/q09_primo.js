// Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um número entre 0 e 100')
    const a = Number(input('--> '))

    // Processamento
    if (a !== 1){
        if(a == 2 || a == 3){
            console.log('O número é primo')
        }else if(a % 2 == 0 || a % 3 == 0 || a % 5 == 0 ){
            console.log('O número não é primo')
        }else{
            console.log('O número é primo')
        }
    }else{
        console.log('O número não é primo')
    }
}

main()