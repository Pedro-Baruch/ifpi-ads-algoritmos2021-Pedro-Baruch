const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Isnsira um palavra')
    const palavra = input('')

    // Processamento
    let quebra = palavra.split('')
    let contrario = ''
    
    for(let i = (quebra.length - 1); i > -1; i--){
        contrario = contrario + quebra[i]
    }

    // Saída
    if(contrario === palavra){
        console.log('É um palindromo')
    }else{
        console.log('Não é um palindromo')
    }
}

main()