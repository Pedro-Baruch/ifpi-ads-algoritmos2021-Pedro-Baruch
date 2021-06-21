const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Serra = 43, Dilma = 13, Ciro Gomes = 23, indeciso = 99, outros = 98, nulo/branco = 0')
    var opniao = Number(input('Insira seu voto --> '))

    // Processamento
    let serra = 0
    let dilma = 0
    let ciro = 0
    let indeciso = 0
    let outros = 0
    let nulo = 0

    while (!(opniao === -1)){
        
        if(opniao === 43){
            serra++
        }else if(opniao === 13){
            dilma++
        }else if(opniao === 23){
            ciro++
        }else if(opniao === 99){
            indeciso++
        }else if(opniao === 98){
            outros++
        }else if(opniao === 0){
            nulo++
        }

        console.log('Serra = 43, Dilma = 13, Ciro Gomes = 23, indeciso = 99, outros = 98, nulo/branco = 0')
        var opniao = Number(input('Insira seu voto --> '))
    }
    let total = serra + dilma + ciro + indeciso + outros + nulo
    
    // Percentual cada situação de voto
    let percentual_serra = (serra / total) * 100
    let percentual_dilma = (dilma / total) * 100
    let percentual_ciro = (ciro / total) * 100
    let percentual_indeciso = (indeciso / total) * 100
    let percentual_outros = (outros / total) * 100
    let percentual_nulo = (outros / total) * 100

    let segundo_turno = 0
    if (percentual_serra > 50 || percentual_dilma > 50 || percentual_ciro > 50){
        segundo_turno = 'É impossivel que haja um segundo turno'
    }else{
        segundo_turno = 'É possivel que haja um segundo turno'
    }

    // Saída
    console.log(`Porcentagem de votos no Serra ${percentual_serra.toFixed(0)}%`)
    console.log(`Porcentagem de votos no Dilma ${percentual_dilma.toFixed(0)}%`)
    console.log(`Porcentagem de votos no Ciro ${percentual_ciro.toFixed(0)}%`)
    console.log(`Porcentagem de votos indeciso ${percentual_indeciso.toFixed(0)}%`)
    console.log(`Porcentagem de votos outros ${percentual_outros.toFixed(0)}%`)
    console.log(`Porcentagem de votos nulo ${percentual_nulo.toFixed(0)}%`)
    console.log(`Total de eleitores ${total}`)
    console.log(segundo_turno)
}

main()