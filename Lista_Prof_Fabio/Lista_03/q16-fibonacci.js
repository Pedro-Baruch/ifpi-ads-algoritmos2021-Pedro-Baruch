const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um número maior que ou igual 2')
    let num = Number(input('N = '))
    
    // Processamento
    fibonacci(num)
}

function fibonacci(num){
    let termo1 = 0
    let termo2 = 1
    let termo3 = 0

    console.log(termo1)
    console.log(termo2)
    for(let i = 3; i <= num; i++){
        let termo3 = termo1 + termo2
        console.log(termo3)
        termo1 = termo2
        termo2 = termo3
    }
}

main()