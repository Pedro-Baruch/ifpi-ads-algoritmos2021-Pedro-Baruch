const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um valor no formato hh:mm:ss')
    const tempo = input('')

    // Processamento
    let quebra = tempo.split(':')
    let hora = quebra[0]
    let minuto = quebra[1]
    let segundo = quebra[2]

    // Nem os segundo e nem os minutos devem passar de 60, essa parte é pra caso uns dos dois seja maior que 60
    
    if(Number(segundo) > 59){
        // Subtração para descobrir quantos segundos temos a mais
        let sub_seg = Number(segundo) - 59
        segundo = Number(segundo) - sub_seg
        // Soma dos segundos extras aos minutos
        let soma_min = (sub_seg / 59) + Number(minuto)
        minuto = soma_min
        if(Number(minuto) > 59){
            // Subtração para descobrir quantos minutos temos a mais
            let sub_min = minuto - 59 
            minuto = Number(minuto) - sub_min
            // Soma dos minutos extras as horas
            let soma_hora = (sub_min / 59) + Number(hora)
            hora = soma_hora
        }
    }else if(Number(minuto) > 59){
        let sub_min = Number(minuto) - 59
        minuto = Number(minuto) - sub_min
        let soma_hora = (sub_min / 59) + Number(hora)
        hora = soma_hora
    }

    // Saída
    console.log(`${hora} horas, ${minuto} minutos e ${segundo} segundos`)
}

main()