const input = require('prompt-sync')()

let pedro = 'pedro'
pedro.split('')

function main(){

    // Entrada
    const n = Number(input('Quantidade de elementos: '))
    const vetora = Array(n)
    const vetorb = Array(n)
    
    for (let i = 0; i < n; i++){
        vetora[i] = Number(input(`Elemento do vetor A ${i}: `))
    }
    for (let j = 0; j < n; j++){
        vetorb[j] = Number(input(`Elemento do vetor B ${j}: `))
    }

    // Processamento
    let vetorc = [vetora,vetorb]
    let vetorcc = vetorc.join(',')
    
    // Saída
    console.log(vetorcc.split(','))
}

main()