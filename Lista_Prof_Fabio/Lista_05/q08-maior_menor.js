const input = require('prompt-sync')()

function main(){

    // Entrada
    const n = Number(input('Quantidade de elementos: '))
    const vetor = Array(n)

    for (let i = 0; i < n; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    // Processamento
    maior_menor(vetor)
}

function maior_menor(vetor){

    let maior_pos = 0
    let menor_pos = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > vetor[maior_pos]){
            maior_pos = i
        }
        if(vetor[i] < vetor[menor_pos]){
            menor_pos = i
        }
    }

    // Saída
    console.log(`Maior elemento: ${vetor[maior_pos]} na posição ${maior_pos}`)
    console.log(`Menor elemento: ${vetor[menor_pos]} na posição ${menor_pos}`)
}

main()