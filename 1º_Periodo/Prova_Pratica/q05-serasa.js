const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Calculo score 1.0 e 2.0 do serasa')
    const numero1 = Number(input('Critério 1 = '))
    const numero2 = Number(input('Critério 2 = '))
    const numero3 = Number(input('Critério 3 = '))

    // Processamento
    const media_score1 = (numero1 * 2.6 + numero2 * 5.7 + numero3 * 1.7) / 10
    const media_score2 = (numero1 * 6.2 + numero2 * 1.9 + numero3 * 1.9) / 10
    score1(media_score1)
    score2(media_score2)
    
    // Saída
    console.log(`Score 1.0: ${media_score1.toFixed(2)} - ${situacao1}`)
    console.log(`Score 2.0: ${media_score2.toFixed(2)} - ${situacao2}`)
}

// Processamento
function score1(valor1,){ // Calculo Score 1.0
    if (valor1 >= 800 && valor1 <= 1000){
        situacao1 = 'Muito bom'
        return situacao1
    }else if(valor1 >= 600 && valor1 < 800){
        situacao1 = 'Bom'
        return situacao1
    }else if(valor1 >= 400 && valor1 < 600){
        situacao1 = 'Regular'
        return situacao1
    }else if(valor1 >= 0 && valor1 < 400){
        situacao1 = 'Baixo'
        return situacao1
    }
}


function score2(valor2){ // Calculo Score 2.0
    if (valor2 > 701 && valor2 <= 1000){
        situacao2 = 'Muito bom'
        return situacao2
    }else if(valor2 > 501 && valor2 < 700){
        situacao2 = 'Bom'
        return situacao2
    }else if(valor2 > 301 && valor2 < 500){
        situacao2 = 'Regular'
        return situacao2
    }else if(valor2 >= 0 && valor2 < 300){
        situacao2 = 'Baixo'
        return situacao2
    }
}

main()

