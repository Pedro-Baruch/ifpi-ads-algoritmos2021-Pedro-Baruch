const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Tabuada de 1 a 10 ---')

    // Processamento
    let num = 0
    
    for(let i = 1; i < 11; i++){
        for(let j = 1; j < 11; j++){
            console.log(`${i} X ${j} = ${i * j}`)
        }
        
    }
}

main()