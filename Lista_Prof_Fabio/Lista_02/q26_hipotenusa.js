// Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira o valor de 3 lados de um triângulo')
    const lado1 = Number(input('--> '))
    const lado2 = Number(input('--> '))
    const lado3 = Number(input('--> '))

    // Processamento
    if (lado1 > 0,lado2 > 0,lado3 > 0) {
        const hipotenusa = Math.max([lado1],[lado2],[lado3])
        if (hipotenusa === lado1){
            console.log(`A hipotenusa é ${lado1} e os catetos são os lados ${lado2} e ${lado3}`)
        }else if (hipotenusa === lado2){
            console.log(`A hipotenusa é ${lado2} e os catetos são os lados ${lado1} e ${lado3}`)
        }else if (hipotenusa === lado3){
            console.log(`A hipotenusa é ${lado3} e os catetos são os lados ${lado1} e ${lado2}`)
        }else{
            console.log('O lado não pode ser igual a zero')
        }
    }
}

main()