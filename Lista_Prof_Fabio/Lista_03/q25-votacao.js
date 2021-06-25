const input = require('prompt-sync')()

function main(){

    // Entrada
    const eleitores = Number(input('Quantidad de eleitores: '))

    // Processamento
    contagem(eleitores)
}

function contagem(eleitores){

    let candidato1 = 0
    let candidato2 = 0
    let candidato3 = 0
    let nulo = 9
    let branco = 0    

    for(let i = 0; i <= eleitores; i++){

        console.log('----------------------------------')
        let voto = Number(input('Seu voto: '))

        if(voto === 1){
            candidato1++
        }else if(voto === 2){
            candidato2++
        }else if(voto === 3){
            candidato3++
        }else if(voto === 9){
            nulo++
        }else if(voto === 0){
            branco++
        }else{
            console.log('Voto inválido')
        }
    }

    let votos_cand1 = candidato1
    let votos_cand2 = candidato2
    let votos_cand3 = candidato3
    let votos_nulo = nulo
    let voto_branco = branco

    // Saída
    console.log(`Candidato1 teve ${votos_cand1} votos`)
    console.log(`Candidato2 teve ${votos_cand2} votos`)
    console.log(`Candidato33 teve ${votos_cand3} votos`)
}