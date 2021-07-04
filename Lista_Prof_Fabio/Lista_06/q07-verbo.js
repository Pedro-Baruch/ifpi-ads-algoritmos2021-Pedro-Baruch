const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um verbo')
    const verbo = input('')

    // Processamento
    let [metade1,metade2] = verbo.split('er')
    let verbo_presente = metade1 + 'o'
    
    console.log(`O verbo no presente será ${verbo_presente}`)
}

main()