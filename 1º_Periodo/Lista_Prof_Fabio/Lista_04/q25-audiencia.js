const input = require('prompt-sync')()

function main(){

    // Entrada
    var canal = Number(input('Número correspondente ao canal: '))
    var pessoas = Number(input('Quantidade de pessoas assisitindo TV: '))

    // Processamento
    let pessoas_pessoas = pessoas
    let canal_canal = canal
    let canal2 = 0
    let canal4 = 0
    let canal5 = 0
    let canal7 = 0
    let canal10 = 0

    while (canal !== 0){
        if(canal === 2){
            canal2 = canal2 + pessoas
        }else if(canal === 4){
            canal4 = canal4 + pessoas
        }else if(canal === 5){
            canal5 = canal5 + pessoas
        }else if(canal === 7){
            canal7 = canal7 + pessoas
        }else if(canal === 10){
            canal10 = canal10 + pessoas
        }

        var canal = Number(input('Número correspondente ao canal: '))
        var pessoas = Number(input('Quantidade de pessoas assisitindo TV: '))
    }

    total = canal2 + canal4 + canal5 + canal7 + canal10

    percentual2 = (canal2 / total) * 100
    percentual4 = (canal4 / total) * 100
    percentual5 = (canal5 / total) * 100
    percentual7 = (canal7 / total) * 100
    percentual10 = (canal10 / total) * 100

    // Saída
    console.log(`O canal 2 teve ${canal2} espectadores com ${percentual2.toFixed(0)}% da audiencia`)
    console.log(`O canal 4 teve ${canal4} espectadores com ${percentual4.toFixed(0)}% da audiencia`)
    console.log(`O canal 5 teve ${canal5} espectadores com ${percentual5.toFixed(0)}% da audiencia`)
    console.log(`O canal 7 teve ${canal7} espectadores com ${percentual7.toFixed(0)}% da audiencia`)
    console.log(`O canal 10 teve ${canal10} espectadores com ${percentual10.toFixed(0)}% da audiencia`)
}

main()