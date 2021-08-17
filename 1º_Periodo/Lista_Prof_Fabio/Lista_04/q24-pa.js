const input = require('prompt-sync')()

function main(){

    // Entrada
    const razao = Number(input('Insira a razão da PA: '))
    let primeirot = Number(input('Insira o primeiro termo da PA: '))
    let ntermos = Number(input('Insira a quantidade de termos da PA: '))

    // Processamento
    let termo
    let contador = 0

    while (!(ntermos === contador)){
        primeirot = primeirot + razao
        termo = primeirot
        console.log(termo)
        contador++
    }

}

main()