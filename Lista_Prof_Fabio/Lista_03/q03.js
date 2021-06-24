const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Calculo PA ---')
    let razao = Number(input('Razão da da PA: '))
    let inicial = Number(input('Valor do numero inicial da PA: '))
    console.log('Insira um valor')
    let limite = Number(input('Limite = '))

    // Processamento
    
    for(let i = inicial; i <= limite; i = i + razao){
        console.log(i)
    }
}

main()