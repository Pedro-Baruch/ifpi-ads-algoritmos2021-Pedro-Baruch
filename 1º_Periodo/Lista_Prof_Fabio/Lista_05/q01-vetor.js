const input = require('prompt-sync')()

function main(){

    // Entrada
    const n = Number(input('Quantidade de elementos: '))
    const vetora = Array(n)
    const vetorb = Array(n)

    for (let i = 0; i < n; i++){
        vetora[i] = Number(input(`Elemento ${i}: `))
    }

    // Processamento

    let j = vetorb.length - 1
    for (item of vetora){
        vetorb[j] = item
        j--
    }

    console.log(vetorb,vetora)
    
}

main()