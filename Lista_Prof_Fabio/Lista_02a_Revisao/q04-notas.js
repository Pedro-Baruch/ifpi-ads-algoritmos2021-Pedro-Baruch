// Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira suas notas')
    const nota2 = Number(input('--> '))
    const nota1 = Number(input('--> '))

    // Processamento
    const media = (nota1 + nota2) / 2
    
    if(media === 10){
        console.log('Aprovado com distinção :)')
    }else if (media >= 7){
        console.log('Aprovado :)')
    }else if(media < 7){
        console.log('Reprovado :(')
    }
}

main()
