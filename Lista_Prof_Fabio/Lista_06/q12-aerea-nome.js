const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira seu nome completo')
    const nome = input('')

    // Processamento
    let quebra = nome.split(' ')
    let maximo = quebra.length - 1
    let nome_primeiro_ultimo = `${quebra[0]} ${quebra[maximo]}`

    // Saída
    console.log(nome_primeiro_ultimo)
}

main()