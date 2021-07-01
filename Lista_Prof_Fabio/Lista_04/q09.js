const input = require('prompt-sync')()

function main(){

    // Entrada
    const num_prova = Number(input('Numero da prova: '))
    const nadadores = Number(input('Numero da nadadores: '))

    // Processamento

    let i = 1
    let cluba = 0
    let clubb = 0

    while(i <= nadadores){
        let nome = input('Nome: ')
        let classificacao = Number(input('Classificação: '))
        let tempo = Number(input('Tempo (s): '))
        let clube = input('Clube (a ou b): ')

        if(classificacao = 1){
            if(clube = 'a'){
                cluba = cluba + 9
            }else if(clube = 'b'){
                clubb = clubb + 9
            }
        }else if(classificacao = 2){
            if(clube = 'a'){
                cluba = cluba + 6
            }else if(clube = 'b'){
                clubb = clubb + 6
            }
        }else if(classificacao = 3){
            if(clube = 'a'){
                cluba = cluba + 4
            }else if(clube = 'b'){
                clubb = clubb + 4
            }
        }else if(classificacao = 4){
            if(clube = 'a'){
                cluba = cluba + 3
            }else if(clube = 'b'){
                clubb = clubb + 3
            }
        }
        i++
    }
    if(cluba > clubb){
        console.log(`O vencedor foi o clube a com ${cluba}`)
    }else if(cluba === clubb){
        console.log(`Os dois clubes empataram`)
    }else{
        console.log(`O vencedor foi o clube b com ${clubb}`)
    }
}

main()