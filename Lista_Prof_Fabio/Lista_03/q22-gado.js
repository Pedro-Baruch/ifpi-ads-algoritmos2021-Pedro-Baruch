const input = require('prompt-sync')()

function main(){

    // Entrada
    const fichas = Number(input('Quantidade de fichas: '))

    // Processamento
    gordo_magro(fichas)
}

// Processamento
function gordo_magro(fichas){

    let maisp = 0 // Mais pesado
    let maism = 99999999 // Mais magro
    let nomep = 0 // Nome do mais pesado
    let nomem = 0 // Nome do mais magro
    
    for(let i = 1; i <= fichas; i++){
        let nome = input('Nome: ')
        let peso = input('Peso: ')

        if(maisp <= peso){
            maisp = peso
            nomep = nome
        }
        if(peso <= maism){
            maism = peso
            nomem = nome
        }
    }
    // Saída
    console.log(`Mais gordo é ${nomep} com ${maisp}`)
    console.log(`Mais magro é ${nomem} com ${maism}`)
}

main()