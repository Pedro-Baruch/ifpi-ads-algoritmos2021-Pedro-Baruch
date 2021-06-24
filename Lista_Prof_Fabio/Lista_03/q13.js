const input = require('prompt-sync')()

function main(){

    // Entrada
    let num = Number(input('N = '))

    // Processamento
    maior_num(num)
    
}

// Processamento
function maior_num(valor){
    let maior = 0

    for(let i = 1; i <= valor; i++){
        let lista = Number(input('Insira um valor: '))

        if(maior <= lista){
            maior = lista
        }
    }
    
    // Saída
    console.log(`O maior número é ${maior}`)
}

main()