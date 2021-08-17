const input = require('prompt-sync')()

function main(){

    // Entrada
    const n = Number(input('Quantidade de elementos: '))
    const vetor = Array(n)
    for (let i = 0; i < n; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    // Processamento
    let vetorb = ''
    
    for(let i = 0; i < n; i++){
        if(vetor[i] % 2 === 0){
            vetorb = vetorb + '0'
        }else if(vetor[i] % 2 === 1){
            vetorb = vetorb + '1'
        }
    }

    // Saída
    console.log(vetorb.split(''))
}

main()