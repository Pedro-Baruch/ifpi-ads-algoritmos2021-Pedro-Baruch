const input = require('prompt-sync')()

function main(){

    // Entrada
    const num = Number(input('Insira um numero com no maximo 3 digitos: '))

    // Processamento
    let unidade = num % 10
    let dezena = ((num - unidade) / 10) % 10
    let centena = ((((num - unidade) / 10) - dezena) /10) % 10

    
}

main()