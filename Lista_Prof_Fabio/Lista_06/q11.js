const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira uma palavra')
    const texto = input('')

    // Processamento
    let quebra = texto.split(' ')
    let numero_palavras = quebra.length

    // Saída
    console.log(`O texto possui ${numero_palavras} palavras`)
}

main()