// Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
// se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,
// verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou
// obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).

const input = require('prompt-sync')()

function main(){

    // Entrada
    const angulo1 = Number(input('Insira o valor de um angulo interno: '))
    const angulo2 = Number(input('Insira o valor de um angulo interno: '))
    const angulo3 = Number(input('Insira o valor de um angulo interno: '))

    // Processamento
    if (diferente_zero(angulo1,angulo2,angulo3)){
        if (triangulo_verdadeiro(angulo1,angulo2,angulo3)){
            if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
                console.log('É um triângulo acutângulo')
            }else if(angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
                console.log('É um triângulo retângulo')
            }else if(angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
                console.log('É um triângulo obtusângulo')
            }
        }else{
            console.log('Não é um triângulo')
        }
    }else{
        console.log('Não é um triângulo')
    }
}

// Processamento
function triangulo_verdadeiro(valor1,valor2,valor3){
    if (valor1 + valor2 + valor3 == 180){
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