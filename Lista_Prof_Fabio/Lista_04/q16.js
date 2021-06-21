const input = require('prompt-sync')()

function main(){

    // Entrada
    let emprestimo = 3000
    
    // Processamento
    let contador = 1
    let percentual = 0
    
    while (emprestimo !== 0){
        emprestimo = (emprestimo - 200)
        percentual = (0.85/100) * emprestimo
        contador++
    }

    // Saída    
    console.log(`A quantidade dias será de ${contador}`)
}

main()