// Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
// sua média. A atribuição de conceitos obedece à tabela abaixo:
// Média de Aproveitamento Conceito
// Entre 9.0 e 10.0 A
// Entre 7.5 e 9.0 B
// Entre 6.0 e 7.5 C
// Entre 4.0 e 6.0 D
//  Entre 4.0 e zero E
// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
// “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira suas notas de matemática e algoritmo')
    const nota1 = Number(input('Matemática --> '))
    const nota2 = Number(input('Algoritmo --> '))

    // Processamento
    const media = (nota1 + nota2) / 2

    if (nota(media)){
        console.log(`Sua nota é ${nota_final} e você está ${resultado}`)
    }
}

function nota(valor){
    if(valor >= 9 && valor <= 10){
        nota_final = 'A'
        resultado = 'aprovado :)'    
        return (nota_final,resultado)
    }else if(valor >= 7.5 && valor < 9){
        nota_final = 'B'
        resultado = 'aprovado :)'    
        return (nota_final,resultado)
    }else if(valor >= 6 && valor < 7.5){
        nota_final = 'C'
        resultado = 'aprovado :)'
        return (nota_final,resultado)
    }else if(valor >= 4 && valor < 6 ){
        nota_final = 'D'
        resultado = 'reprovado :('
        return (nota_final,resultado)
    }else if(calor >= 0 && valor < 4){
        nota_final = 'E'
        resultado = 'reprovado :('
        return (nota_final,resultado)
    }
}

main()