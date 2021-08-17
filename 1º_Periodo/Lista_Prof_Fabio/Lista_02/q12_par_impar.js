// Leia 1 (um) número inteiro e escreva se este número é par ou impar.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const numero = Number(input('Digite um número: '))

    // Processamento
    if (par(numero)){
        console.log(`O número ${numero} é par`)
    }else{
        console.log(`O número ${numero} é impar`)
    }

}

function par(valor){
    if(valor % 2 === 0){
        return true
    }else{
        return false
    }
    
}

main()