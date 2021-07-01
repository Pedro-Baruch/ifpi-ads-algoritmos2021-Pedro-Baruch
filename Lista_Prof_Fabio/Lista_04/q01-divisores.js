const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Informe um número ---')
    const num = input('--> ')

    // Processamento
    let i = 0
    
    if(num > 0){
        console.log(`${num} é divisivel por:`)
        while(i <= num){
            if(num % i === 0){
                console.log(i)
            }
            i++
        }
    }else if(num === 0){
        console.log('Cabô')
    }
}

main()