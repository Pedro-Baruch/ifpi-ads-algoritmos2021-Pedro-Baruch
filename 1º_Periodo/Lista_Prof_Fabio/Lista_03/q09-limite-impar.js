const input = require('prompt-sync')()

function main(){

    // Entrada
    let limitesu = Number(input('Limite superior: '))
    let limitein = Number(input('Limite inferior: '))

    // Processamento

    for(let i = limitein; i <= limitesu; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

main()