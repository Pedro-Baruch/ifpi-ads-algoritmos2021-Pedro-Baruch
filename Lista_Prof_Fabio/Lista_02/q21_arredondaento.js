// Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
// maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
// contrario, é arredondado para o inteiro imediatamente inferior.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um valor')
    const a = Number(input('--> '))

    // Processamento
    const x = Math.round(a)

    console.log(x)
}

main()