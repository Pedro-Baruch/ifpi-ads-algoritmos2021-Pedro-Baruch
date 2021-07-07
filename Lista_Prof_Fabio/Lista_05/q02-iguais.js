const input = require('prompt-sync')()

let pedro = 'pedro'
pedro.length

function main(){

    // Entrada
    const n = Number(input('Quantidade de elementos: '))
    const vetor = Array(n)

    for (let i = 0; i < n; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    // Saída
    if(contem_repetidos(vetora)){
        console.log(`Temos elementos iguais`)
    }else{
        console.log('Não temos elementos iguais')
    }
}

// Processamento    
function contem_repetidos(vetor){

    let elemento 
    let contador

    for (let i = 0; i < vetor.length; i++){
        elemento = vetor[i]
        contador = 0
        for(let j = 0; j < vetor.length; j++){
            if (elemento === vetor[j]){
                contador++
            }
        }
    }

    if(contador > 1){
        return true
    }
}

main()