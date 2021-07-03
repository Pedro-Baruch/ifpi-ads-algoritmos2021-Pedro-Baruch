const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Escreva no formato (10,Algarismos)')
    const string = input('')

    // Processamento
    vertical(string)
}

// Processamento
function vertical(string){

    let quebra = string.split(',')
    let [a,b] = quebra
    let espaço = ' '

    for(let i = 1; i <= Number(a); i++){
        if(i === Number(a)){
            console.log(b)
        }else{
            console.log(espaço)
        }
    }
}

main()