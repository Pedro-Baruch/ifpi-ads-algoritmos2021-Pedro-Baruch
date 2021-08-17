const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira uma frase:')
    const frase = input('')

    // Processamento
    let quebra = frase.split(' ')

    console.log('---------------------------------')
    for (i = 0; i < quebra.length; i++){
        console.log(quebra[i])
    }
}

main()