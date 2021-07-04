const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira uma frase')
    const frase = input('')

    // Processamento
    num_extenso(frase)
    frase.length
}

function num_extenso(frase){
    
    let quebra = frase.split('')
    
    let algarismos = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove']
    let mensagem = ''

    for(let i = 0; i <= frase.length - 1; i++){
        mensagem = mensagem + algarismos[quebra[i]] + ' '
    }

    console.log(mensagem)
}

main()