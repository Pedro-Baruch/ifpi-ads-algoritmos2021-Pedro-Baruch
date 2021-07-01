const input = require('prompt-sync')()

function main(){

    var aleatorio = Math.random(0,100)
    var numero = Number(input('Insira um valor: '))
    
    let contador = 0

    while (!(numero === aleatorio)){
        if(aleatorio > numero){
            console.log('Maior')
            console.log(aleatorio)
        }else if(numero > aleatorio){
            console.log('Menor')
            console.log(aleatorio)
        }
        contador++

        var numero = Number(input('Insira um valor: '))
    }
    console.log(contador,aleatorio)
}

main()