const input = require('prompt-sync')()

function main(){

    // Entrada
    const n = 10
    const vetor = Array(n)
    for (let i = 0; i < n; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    // Processamento
    let s = 0

    for(let i = 0; i < n; i++){
        for(let j = n-1; j > 0; j--){
            s = s + Math.pow(vetor[i] - vetor[j],2)
            if(i === j){
                break
            }
        }
    }

    // Saída
    console.log(s)
}

main()