const input = require('prompt-sync')()

function main(){

    // Entrada
    const num = Number(input('Quantidad ede temos: '))

    // Processamento
    fibonacci(num)
}

// Processamento
function fibonacci(num){
    
    let vetor = Array(num)
    
    let termo1 = 0
    let termo2 = 1
    let termo3 = 0

    vetor = [termo1] + [termo2]
    
    for(let i = 3; i <= num; i++){
        termo3 = termo1 + termo2
        vetor = [vetor] + [termo3]
        termo1 = termo2
        termo2 = termo3
    }

    console.table(vetor.split(''))
}

main()