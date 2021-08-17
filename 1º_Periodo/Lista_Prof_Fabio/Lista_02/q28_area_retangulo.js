// Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
// um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
// não pode ser negativo.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira o valor de duas coordenadas no plano cartesiano que representam os cantos de um retângulo')
    const ax = Number(input('Ax --> '))
    const ay = Number(input('Ay --> '))
    const bx = Number(input('Bx --> '))
    const by = Number(input('By --> '))
    
    // Processamento
    const altura = ay - by
    const base = ax - bx
    const area = (base * altura) / 2
    
    if(area > 0){
        console.log(`O valor da área do retângulo é ${area}`)
    }else{
        console.log('A área não pode ser negativa')
    }
    
}

main()