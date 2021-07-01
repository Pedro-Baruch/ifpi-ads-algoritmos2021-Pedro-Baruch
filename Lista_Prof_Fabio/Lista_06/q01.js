const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira sua mensagem')
    const frase = input('')

    // Processamento
    let contrario = invercao(frase)
    let contagem = troca_consoante(contrario)
    
    // Saída
    console.log(contagem)
}


// Processamento
function invercao(frase){
    let quebra = frase.split('')
    let contrario = ''

    for(let i = (frase.length - 1); i > -1; i--){
        contrario = contrario + quebra[i]
    }
    return contrario
}

function troca_consoante(contrario){
    let altura = contrario.length
    let consoante = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','y','z','B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','X','Y','Z']
    let contagem = contrario
    let sem_consoante = ''

    for(let i = 0; i < altura; i++){
        for(let j = 0; j < consoante.length; j++){
            if(contrario[i] === consoante[j]){
                sem_consoante = contagem.split(contagem[i])
                contagem = sem_consoante.join('#')
            }
        }
    }
    return contagem

}

main()