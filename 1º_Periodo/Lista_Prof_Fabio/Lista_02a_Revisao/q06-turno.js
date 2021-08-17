// Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
// escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira o turno que voce estuda')
    const turno = input('--> ')

    // Processamento
    if (turno === 'M'){
        console.log('Bom dia!')
    }else if(turno === 'V'){
        console.log('Boa tarde!')
    }else if(turno === 'N'){
        console.log('Boa noite')
    }else{
        console.log('Valor inválido')
    }
}

main()