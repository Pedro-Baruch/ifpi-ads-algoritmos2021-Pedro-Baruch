const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um frase')
    const frase = input('')

    // Processamento
    let quebra = frase.split('')
    let frase_nova = ''
    let duplicata = ''
    
    for(let i = 0; i < quebra.length; i++){
        duplicata = quebra[i] + quebra[i]
        frase_nova = frase_nova + duplicata
    }

    console.log(frase_nova)
}

main()