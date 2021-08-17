// Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
// coeficiente A deve ser diferente de 0 (zero).

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira o valor de A, B e C em uma equação do segundo grau')
    const a = Number(input('Valor de A --> '))
    const b = Number(input('Valor de B --> '))
    const c = Number(input('Valor de C --> '))

    // Processamento
    if(a !== 0){
    const delta = Math.pow(b, 2) - 4 * a * c
       
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        
        console.log(`O valor de x1 é ${x1} e de x2 é ${x2}`)
    }else{
        console.log('A tem que ser diferente de 0')
    }
}

main()