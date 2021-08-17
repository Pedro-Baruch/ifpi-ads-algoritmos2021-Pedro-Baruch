const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira uma frase')
    const frase = input('')

    // Processamento
    let quebra = frase.split(' ')
    let frase_nova = ''

    for(let i = 0;i < quebra.length; i++){
        frase_nova = frase_nova + quebra[i]
    }

    // Saída
    console.log(frase_nova)
}

main()