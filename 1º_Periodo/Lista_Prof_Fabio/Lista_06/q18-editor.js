const input = require('prompt-sync')()

function main(){

    // Entrada
    const frase = input('Frase: ')
    console.log('Insira a palavra que voce quer mudar e a mudança no formato (palavra,mudança)')
    const mudanca = input('')

    // Processamento
    let quebra = frase.split(' ')
    quebra.length

    edicao(frase,mudanca)
}

function edicao(frase,mudanca){

    // Separando a frase
    let quebra = frase.split(' ')
    let palavra = ''
    let altura = quebra.length

    // Separando a mudança
    let [antiga,nova] = mudanca.split(',')

    let palavra_final

    for(let i = 0;i < altura; i++){
        if(quebra[i] === antiga){
            palavra = frase.split(quebra[i])
            palavra_final = palavra.join(nova) + ' '
        }
    }

    // Saída
    console.log(palavra_final)
}

main()