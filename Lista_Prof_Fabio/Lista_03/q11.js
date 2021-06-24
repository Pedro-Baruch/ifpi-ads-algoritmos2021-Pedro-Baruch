const input = require('prompt-sync')()

function main(){

    // Entrada
    let limitesu = Number(input('Limite superior: '))
    let limitein = Number(input('Limite inferior: '))

    // Processamento

    for(let i = limitein; i <= limitesu; i++){
        if(i === 1){
            continue
        }else if(i === 2 || i === 3 || i === 5){
            console.log(`${i} é primo`)
        }else if(!(i % 2 === 0 || i % 3 === 0 || i % 5 === 0)){
            console.log(`${i} é primo`)
        }
    }
}

main()