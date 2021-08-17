// Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

const input = require('prompt-sync')()

function main(){
    
    // Entrada
    const a = Number(input('Inrira um numero: '))
    const b = Number(input('Inrira um numero: '))
    const c = Number(input('Inrira um numero: '))

    // Processamento
    if (a === b && b === c){
        console.log('Todos os números são iguais')
    }else if(a !== b && b !== c && c !== a){
        console.log('Todos os números são diferentes')
    }else{
        console.log('Apenas dois números são iguais')
    }
}

main()