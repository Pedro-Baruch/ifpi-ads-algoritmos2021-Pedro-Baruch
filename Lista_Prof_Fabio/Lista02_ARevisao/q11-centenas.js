// Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
// número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
// o 326 = 3 centenas, 2 dezenas e 6 unidades
// o 12 = 1 dezena e 2 unidades

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um valor entre 0 e 1000')
    const numero = input('--> ')

    // Processamento

    const unidade = numero % 10
    const dezena = ((numero - unidade) / 10) % 10
    const centena = ((((numero - unidade) / 10) - dezena) /10) % 10
    
    if (unidade === 1){
        s_unidade = ''
    }else{
        s_unidade = 's'
    }
        
    if (dezena === 1){
        s_dezena = ''
    }else{
        s_dezena = 's'
    }
    
    if (centena === 1){
        s_centena = ''
    }else{
        s_centena = 's'
    }
    
    console.log(`O ${numero} = ${centena} centena${s_centena}, ${dezena} dezena${s_dezena} e ${unidade} unidade${s_unidade}`)
}

main()