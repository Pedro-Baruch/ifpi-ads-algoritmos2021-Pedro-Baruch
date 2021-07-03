const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira uma informação no formato (texto,10,20)')
    const string = input('')

    // Processamento
    let [texto,posicao,caratere] = string.split(',')

    for(let i = 0; i < Number(caratere); i++){
        console.log(texto[posicao])
    }
}

main()