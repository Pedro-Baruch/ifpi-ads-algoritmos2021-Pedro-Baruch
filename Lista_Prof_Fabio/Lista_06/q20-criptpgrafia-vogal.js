const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Criptografia ---')
    const frase = input('Frase: ')

    // Processamento
    frase.length
    criptografia(frase)
}

function criptografia(frase){

    let quebra = frase.split('')
    let vogais = ['a','e','i','o','u','A','E','I','O','U']
    let palavra = ''
    let vogais_separadas = ''

    for(let i = 0; i < quebra.length; i++){
        for(let j = 0;j < vogais.length; j++){
            if(quebra[i] === vogais[j]){
                palavra = frase.split(quebra[i])
                frase = palavra.join('')
                vogais_separadas = vogais_separadas + (quebra[i] + i)
            }
        }
    }
    
    // Saída
    console.log(`Sua frase criptografada: ${frase}`)
    descriptografando(frase,vogais_separadas)
}

function descriptografando(frase,vogais_separadas){

    let quebra = vogais_separadas.split('')
    let letra = ''
    let posicao = ''

    for(let i = 0; i < quebra.length; i++){
        i++
        posicao = posicao + quebra[i]
    }

    for(let j = -1; j < (quebra.length - 1); j++){
        j++
        letra = letra + quebra[j] 
    }
    
    console.log(posicao,'//',letra)

    let altura = quebra.length + frase.length
    let quebra_crip = 'cu'
    let palavra

    for(let y = 0; y < altura; y++){
        quebra_crip = frase.split('')
        if(y === Number(posicao[1])){
        palavra = quebra_crip.join(letra[y])
        console.log(palavra)
        }
    }

    console.log(quebra_crip,palavra)
    console.log(palavra)

}

main()
