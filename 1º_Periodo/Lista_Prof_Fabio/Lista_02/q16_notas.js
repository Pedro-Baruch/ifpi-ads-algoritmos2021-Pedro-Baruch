// Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
// ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
// final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
// escreva “Reprovado”.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const nota1 = Number(input('Valor da primeira nota: '))
    const nota2 = Number(input('Valor da segunda nota: '))

    // Processamento
    if(nota1 >= 7 && nota2 >= 7){
        console.log('--> Aprovado :) <--')
    }else{
        console.log('--> Reprovado :( <--')
    }
}

main()