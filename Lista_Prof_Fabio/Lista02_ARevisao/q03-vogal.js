// Leia uma letra e verifique se a letra digitada é vogal ou consoante.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira uma letra')
    const valor = input('--> ')

    // Processamento
    if (valor === 'a' || valor === 'e' || valor === 'i' || valor === 'o' || valor === 'u'){
        console.log('É uma vogal')
    }else{
        console.log('É uma consoante')
    }
}

main()