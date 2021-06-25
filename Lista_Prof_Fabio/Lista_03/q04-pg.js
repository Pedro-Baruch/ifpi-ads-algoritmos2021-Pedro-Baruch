const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Calculo PG ---')
    let razao = Number(input('Razão da da PG: '))
    let inicial = Number(input('Valor do numero inicial da PG: '))
    console.log('Insira um valor')
    let limite = Number(input('Limite = '))

    // Processamento
    
    for(let i = inicial; i <= limite; i = i * razao){
        console.log(i)
        
        if (i === 0){
            console.log('Todos os termos da PG serão igual a zero')
            break
        }
        if (razao === 0){
            console.log('Todos os termos da PG serão igual a zero')
            break
        }
    }
}

main()