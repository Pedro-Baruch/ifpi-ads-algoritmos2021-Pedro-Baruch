// Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
// escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
// são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
// divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
// escreva o quadrado dos números lidos.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira dois valores inteiros e distintos')
    const num1 = Number(input('--> '))
    const num2 = Number(input('--> '))

    // Processamento
    if (num1 % num2 == 1){
        soma = num1 + num2 + 1
        console.log('O resultado é',soma)
    }else if(num1 % num2 == 2){
        if (par(num1)){
            console.log(num1,'é par')
        }else{
            console.log(num1,'é impar')
        }
        
        if (par(num2)){
            console.log(num2,'é par')
        }else{
            console.log(num2,'é impar')
        }
    }else if(num1 % num2 == 3){
        multipliacao = (num1 + num2) * num1
        console.log('O resultado é',multipliacao)
    }else if(num1 % num2 == 4){
        divisao = (num1 + num2) / num2
        console.log('O resultado é',divisao.toFixed(2))
    }else{
        console.log(`Esses são os números que foram lidos: ${num1} e ${num2}`)
    }
}

// Processamento
function par(valor){
    if (valor % 2 === 0){
        return true
    }else{
        return false
    }
}

main()
