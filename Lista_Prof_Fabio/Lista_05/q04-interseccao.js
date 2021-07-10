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
    
    let vetorc = uniao(vetora, vetorb)
    let vetord = intersecao(vetora, vetorb)
    
    // Saída
    console.log(`Esse o conjunto união [${vetorc}]`)
    console.log(`Esse é a intersecção [${vetord}]`)
}

// Processamento
function uniao(a, b){

    let vetor = a.concat(b)

    for(let i = 0; i < vetor.length; i++){
        for(let j = 0; j < vetor.length; j++){
            if(i !== j && vetor[i] === vetor[j]){
                vetor.splice(i,1)
            }
        }
    }

    return vetor
}

function intersecao(a, b){

    let vetor = a.concat(b)
    let vetord = []

    for(let i = 0; i < vetor.length; i++){
        for(let j = 0; j < vetor.length; j++){
            if(i !== j && vetor[i] === vetor[j]){
                vetord.push(vetor[j])
            }
        }
    }

    return vetord
}
main()