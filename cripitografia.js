const input = require('prompt-sync')()

function main(){

    // Entrada
    let palavra = input('--> ')

    // Processamento
    palavr

    let new_word = inverter(palavra)
    let palavra_final = metade(new_word)

    // Saída
    console.log(`Palavra encriptada: ${palavra_final}`)
}

function inverter(palavra){

    let altura = palavra.length
    let inversao = ''
    let nova_palavra = ''

    for(let i = altura; i > -1; i--){
        inversao = palavra.charCodeAt(i) + 3
        nova_palavra = nova_palavra + String.fromCharCode(inversao)
    }
    return nova_palavra
}

function metade(palavra){

    let altura = palavra.length
    let met = palavra.charAt(altura / 2)
    let [metade1, metade2] = palavra.split(met)

    let meio = ''
    let nova_palavra = ''

    metade2 = met + metade2

    for(let i = 0; i < metade2.length; i++){
        meio = metade2.charCodeAt(i) - 1
        nova_palavra = nova_palavra + String.fromCharCode(meio)
    }

    let palavra_final = metade1 + nova_palavra
    return palavra_final
}

main()