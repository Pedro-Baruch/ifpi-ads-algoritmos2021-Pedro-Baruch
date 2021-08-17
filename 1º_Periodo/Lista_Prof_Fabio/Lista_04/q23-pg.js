const input = require('prompt-sync')()

function main(){

    // Entrada
    const razao = Number(input('Insira a razão da PG: '))
    let primeirot = Number(input('Insira o primereiro número da PG: '))
    let ntermos = Number(input('Insira a quantidade de termos da PG: '))

    // Processamento
    let termo
    let contador = 0
    
    while(!(ntermos === contador)){
        primeirot = primeirot * razao
        termo = primeirot
        console.log(termo)
        contador++
    }

    // Saída
    console.log('Esses são os termos da PG')
}

main()