const input = require('prompt-sync')()

function main(){

    // Entrada
    let matricula = input('Matricula do aluno: ')
    let nota1 = Number(input('Valor nota 1 : '))
    let nota2 = Number(input('Valor nota 2 : '))
    let nota3 = Number(input('Valor nota 3 : '))

    // Processamento
    let media_final = 0
    let aprovado = 0
    let reprovado = 0
    let total_alunos = 0
    
    // Sempre que a matricula for diferente de zero o comando será executado
    while(matricula != '0'){
        media_final = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10
        if(media_final >=7 ){
            aprovado++ // Adiciona mais 1 se a média for maior ou igual a 7
        }else if(media_final < 7){
            reprovado++ // Adiociona mais 1 se a média for menor que 7
        }
        
        total_alunos = aprovado + reprovado

        matricula = input('Matricula do aluno: ')
        nota1 = Number(input('Valor nota 1: '))
        nota2 = Number(input('Valor nota 2: '))
        nota3 = Number(input('Valor nota 3: '))
    }

    // Saída
    console.log(`Total de alunos: ${total_alunos}`)
    console.log(`Aprovados: ${aprovado}`)
    console.log(`Reprovados: ${reprovado}`)
}

main()