const input = require('prompt-sync')()

function main(){

    // Entrada
    const nome = String(input('Insira seu nome: '))

    // Processamento
    let quebra = nome.split(' ')
    let parte_nome = ''
    let inicial = ''

    for(let i = 0; i < quebra.length; i++){
        parte_nome = quebra[i]
        inicial = inicial + parte_nome[0]
    }

    console.log(`Seu login é: ${inicial}`)
}

main()