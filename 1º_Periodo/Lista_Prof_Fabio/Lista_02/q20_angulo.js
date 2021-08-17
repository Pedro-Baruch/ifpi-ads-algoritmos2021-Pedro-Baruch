// Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
// quarto) em que o ângulo se localiza.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um angulo')
    const angulo = Number(input('--> '))

    // Processamento
    if(angulo > 0 && angulo <= 90){
        console.log('O angulo faz parte do primeiro quadrante')
    }else if(angulo > 90 && angulo <= 180){
        console.log('O angulo faz parte do segundo quadrante')
    }else if(angulo > 180 && angulo <= 270){
        console.log('O angulo faz parte do terceiro quadrante')
    }else if(angulo > 270 && angulo <= 360){
        console.log('O angulo faz parte do quarto quadrante')
    }
}

main()