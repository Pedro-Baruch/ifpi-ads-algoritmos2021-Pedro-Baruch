const input = require('prompt-sync')()


function main(){

    // Entrada
    const n = Number(input('Quantidade de elementos: '))
    const vetor = Array(n)

    for (let i = 0; i < n; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    // Processamento
    
    vetor.sort(ordenar_array)
    for(let i = 0; i < n; i++){
        console.log(vetor[i] + '')
    }
}

function ordenar_array(a,b){
    return a - b
}

main()