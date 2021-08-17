// Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
// formadas pelos seus dois primeiros e dois últimos dígitos.
// Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
// Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.

const input = require('prompt-sync')()

function main(){
    
    // Entrada
    console.log('Insira um valor de 4 digitos')
    const valor = input('--> ')

    // Processamento
    const raiz = Math.sqrt(valor)
    const a = valor[0]
    const b = valor[1]
    const c = valor[2]
    const d = valor[3]

    const dois_digitos1 = a + b
    const dois_digitos2 = c + d

    if (raiz == Number(dois_digitos1) + Number(dois_digitos2)){
        console.log('É uma quadrado perfeito')
    }else{
        console.log('Não é um quadrado perfeito')
    }
}

main()