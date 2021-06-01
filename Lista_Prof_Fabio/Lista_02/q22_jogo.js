// Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
// hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
// máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
// seguinte.

const input = require('prompt-sync')()

function main(){

    // Entrada
    const hora_inicio = Number(input('Insira a hora de inicio --> '))
    const minutos_inicio = Number(input('Insira o minuto de inicio --> '))
    const hora_fim = Number(input('Insira a hora do termino --> '))
    const minuto_fim = Number(input('Insira o minuto do termino --> '))
    
    // Processamento
    if (hora_inicio > hora_fim){
        duracao_hr = (hora_fim - hora_inicio) + 24
        console.log('Durou',duracao_hr,'horas e')
    }else{
        duracao_hr = hora_fim - hora_inicio
        console.log('Durou',duracao_hr,'horas e')
    }
    
    if (minutos_inicio > minuto_fim){
        duracao_min = (minuto_fim - minutos_inicio) + 60
        console.log(duracao_min,'minutos')
    }else{
        duracao_min = minuto_fim - minutos_inicio
        console.log(duracao_min,'minutos')
    }

}

main()