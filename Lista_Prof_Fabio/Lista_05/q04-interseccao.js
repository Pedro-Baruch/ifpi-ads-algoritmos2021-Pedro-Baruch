const input = require('prompt-sync')()

function main(){

    // Entrada
    const n = Number(input('Quantidade de elementos: '))
    const vetora = Array(n)
    const vetorb = Array(n)
    
    for (let i = 0; i < n; i++){
        vetora[i] = input(`Elemento do vetor A ${i}: `)
    }
    for (let j = 0; j < n; j++){
        vetorb[j] = input(`Elemento do vetor B ${j}: `)
    }

    // Processamento
    
    
    
}
main()