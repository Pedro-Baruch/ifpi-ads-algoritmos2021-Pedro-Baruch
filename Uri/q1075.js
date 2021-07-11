const input = require('prompt-sync')()

function main(){

    // Entrada
    const num = Number(input('Valor de N: '))

    // Processamento
    let resultado = 0

    for(let i = 1; i <= 1000; i++){
        if(i < num){
            if(num % i === 2){
                resultado += i + ','
            }
        }else if(i > num){
            if(i % num){
                resultado += i + ','
            }
        }
    }

    console.log(resultado)
}

main()