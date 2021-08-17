const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um valor em binário')
    const numero = input('')

    // Processamento
    let quebra = numero.split('')
    let altura = quebra.length - 1
    let decimal = ''
    let j = 0

    for(let i = altura; i > -1; i--){
        for(let j = 0; j <= altura; j++){
        }
        decimal = decimal + (quebra[j] * Math.pow(2,i))
        console.log(decimal)
    }

    console.log(decimal)
}

main()