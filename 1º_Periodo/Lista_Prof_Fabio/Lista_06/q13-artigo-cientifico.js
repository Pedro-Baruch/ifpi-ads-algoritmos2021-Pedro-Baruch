const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira seu nome completo')
    const nome = input('')

    // Processamento
    let quebra = nome.split(' ')
    let ultimo_nome = quebra[quebra.length - 1]
    let conjunto = ''
    
    console.log('---------------------------------------')
    for(let i = 0; i < (quebra.length - 1); i++){
        let quebra2 = quebra[i]
        let quebra3 = quebra2.split('')
        let inicial = quebra3[0]
        conjunto = conjunto + inicial + '. '
    }
    
    // Saída
    console.log(ultimo_nome,conjunto.toUpperCase(conjunto))
}

main()