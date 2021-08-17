// Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
// do algarismo da unidade.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const dezena = input('Insira um valor com dois algarismos: ')
    
    // Processamento
    const digito1 = dezena.charAt(0)
    const digito2 = dezena.charAt(1)

    if (algarismos_iguais(digito1,digito2)){
        console.log('O valor dos algarismos é igual')
    }else{
        console.log('O valor dos algarismos é diferente')
    }
}

// Processamento
function algarismos_iguais (valor1,valor2){
    
    if (valor1 === valor2){
        return true
    }else{
        return false
    }
}

main()