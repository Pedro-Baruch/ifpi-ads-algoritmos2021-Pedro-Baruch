const input = require('prompt-sync')()

function main(){

    // Entrada
    const string = input('Insira uma palavra: ')

    // Processamento
    diagonal(string)

}

// Processamento
function diagonal(string){

    let espaco = ''
    let espaco2 = ' '
    
    for(let i = 1; i <= 20; i++){
        espaco = espaco + espaco2
        console.log(espaco,string)
    }
}

main()