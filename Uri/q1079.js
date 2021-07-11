const input = require('prompt-sync')()

function main(){
    
    // Entrada
    const casos = Number(input('Quantidade de casos: '))
    let teste = ''
    let medias = Array(casos-2)

    // Processamento
    for(let i = 0; i < casos; i++){
        teste = input('Testes separados por espaço: ')
        let [teste1, teste2, teste3] = teste.split(' ')
        
        medias += mediaPonderada(teste1,teste2,teste3).toFixed(1) + ',' 
    }

    medias = medias.split(',')
    let j = 1

    for(let i = 0; i < casos; i++){
        console.log(`Média ponderada do teste ${j++} = ${medias[i]}`)
    }
}

// Processamento
function mediaPonderada(a,b,c){
    media = (a * 2 + b * 3 + c * 5) / (2+3+5)
    return media
}

main()