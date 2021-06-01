// Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
// (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
// formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
// escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).

const input = require('prompt-sync')()

function main(){

    // Entrada
    const lado1 = Number(input('Insira o valor do primeiro lado do triangulo: '))
    const lado2 = Number(input('Insira o valor do segundo lado do triangulo: '))
    const lado3 = Number(input('Insira o valor do terceiro lado do triangulo: '))

    // Processamento
    if (diferente_zero(lado1,lado2,lado3)){
       if (triangulo_verdadeiro(lado1,lado2,lado3)){
            if(lado1 === lado2 && lado2 ===lado3){
                console.log('É um triângulo equilátero')
            }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
                console.log('É um triângulo isóceles')
            }else if(lado1 !== lado2 && lado2 !== lado3){
                console.log('É um triângulo escaleno')
            }
        }else{
            console.log('Não é um triângulo')
        }
    }else{
        console.log('Não é um triângulo')
    }
}

function triangulo_verdadeiro(valor1,valor2,valor3) {
    if ((valor1 + valor2) >= valor3){
        return true
    }else{
        return false
    }
}

function diferente_zero(valor1,valor2,valor3){
    if (valor1 !==0 && valor2 !== 0 && valor3 !== 0){
        return true
    }else{
        return false
    }
}

main()