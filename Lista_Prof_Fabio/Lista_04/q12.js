const input = require('prompt-sync')()

function main(){

    // Entrada
    const jogador = Number(input('Jogador: '))
    const pontos = Number(input('Pontos: '))
    
    // Processamento
    contagem_pontos(jogador,pontos)
}

function contagem_pontos(jogador,pontos){
    
    let pontos1 = 0
    let pontos2 = 0

    while(jogador !== 0){
        
        if(jogador === 1){
            pontos1 = pontos1 + pontos
            console.log(`Jogador ${jogador} tem ${pontos1} pontos`)
        }else if(jogador === 2){
            pontos2 = pontos2 + pontos
            console.log(`Jogador ${jogador} tem ${pontos2} pontos`)
        }
        
        if(pontos1 >= 21){
            break
        }else if(pontos2 >= 21){
            break
        }

        console.log('----------------------------------------')
        jogador = Number(input('Jogador: '))
        pontos = Number(input('Pontos: '))
    }

    console.log(`O vencedor é o jogador ${jogador}`)
}

main()