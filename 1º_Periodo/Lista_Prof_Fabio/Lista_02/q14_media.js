// Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Calculo da média')
    const num1 = Number(input('--> '))
    const num2 = Number(input('--> '))
    const num3 = Number(input('--> '))
    const num4 = Number(input('--> '))
    const num5 = Number(input('--> '))

    // Processamento
    if (media(num1,num2,num3,num4,num5)){
        console.log(`A média é ${calculo_media}`)
    }

    if (num1 > calculo_media){
        console.log(num1,'É maior que a média')
    } 
    
    if(num2 > calculo_media){
        console.log(num2,'É maior que a média')
    } 
    
    if(num3 > calculo_media){
        console.log(num3,'É maior que a média')
    }
    
    if(num4 > calculo_media){
        console.log(num4,'É maior que a média')
    }
    
    if(num5 > calculo_media){
        console.log(num5,'É maior que a média')
    }
    
}

function media(a,b,c,d,e){
    return calculo_media = (a + b + c + d + e) / 5
}

main()