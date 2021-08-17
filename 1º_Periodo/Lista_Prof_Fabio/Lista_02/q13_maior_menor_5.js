// Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
// diferentes.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira 5 número diferentes:')
    const num1 = Number(input('--> '))
    const num2 = Number(input('--> '))
    const num3 = Number(input('--> '))
    const num4 = Number(input('--> '))
    const num5 = Number(input('--> '))

    // Processamnto
    if (maior(num1,num2,num3,num3,num5)){
        console.log(`O maior é o número ${num_maior} `)
    }
    
    if (menor(num1,num2,num3,num3,num5)){
        console.log(`O menor é o número ${num_menor} `)
    }
}

// Processamento
function maior(valor1,valor2,valor3,valor4,valor5){
    if (valor1 > valor2 && valor1 > valor3 && valor1 > valor4 && valor1 > valor5){
        return num_maior = valor1
    }else if(valor2 > valor1 && valor2 > valor3 && valor2 > valor4 && valor2 > valor5){
        return num_maior = valor2
    }else if(valor3 > valor1 && valor3 > valor2 && valor3 > valor4 && valor3 > valor5){
        return num_maior = valor3
    }else if(valor4 > valor1 && valor4 > valor2 && valor4 > valor3 && valor4 > valor5){
        return num_maior = valor4
    }else if(valor5 > valor1 && valor5 > valor2 && valor5 > valor3 && valor5 > valor4){
        return num_maior = valor5
    }
}

function menor(valor1,valor2,valor3,valor4,valor5){
    if (valor1 < valor2 && valor1 < valor3 && valor1 < valor4 && valor1 < valor5){
        return num_menor = valor1
    }else if(valor2 < valor1 && valor2 < valor3 && valor2 < valor4 && valor2 < valor5){
        return num_menor = valor2
    }else if(valor3 < valor1 && valor3 < valor2 && valor3 < valor4 && valor3 < valor5){
        return num_menor = valor3
    }else if(valor4 < valor1 && valor4 < valor2 && valor4 < valor3 && valor4 < valor5){
        return num_menor = valor4
    }else if(valor5 < valor1 && valor5 < valor2 && valor5 < valor3 && valor5 < valor4){
        return num_menor = valor5
    }
}

main()