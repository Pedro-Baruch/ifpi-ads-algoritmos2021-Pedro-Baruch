const input = require('prompt-sync')()

function main(){

    // Entrada
    let num = Number(input('N = '))
    let limitesu = Number(input('Limite superior: '))
    let limitein = Number(input('Limite inferior: '))
    // Processamento

    for(let i = limitein; i <= limitesu; i++){
        if(i % num === 0){
            console.log(`${i} é divisivel por ${num}`)
        }
    }
}

main()