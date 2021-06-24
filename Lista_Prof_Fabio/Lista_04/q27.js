const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('1 = Masculino, 2 = Feminino')
    var sexo = Number(input('Qual seu sexo?: '))
    var idade = Number(input('Qual sua idade?: '))
    console.log('1 = Casado(a), 2 = Solteiro(a), 3 = Divorciado(a), 4 = Viúvo(a)')
    var estadoc = Number(input('Qual seu estado civil?: '))

    // Processamento
    let contador = 0
    let homen = 0
    let mulher = 0
    let idade_homen = 0
    let idade_mulher = 0
    let homen_solteiro = 0
    let mulher_solteira = 0

    while (!(contador === 10)){
        if(sexo === 1){
            idade_homen = idade_homen + idade
            homen++
            if(estadoc === 2){
                homen_solteiro++
        }else if(sexo === 2){
            idade_mulher = idade_mulher + idade
            mulher++
            if(estadoc === 2){
                mulher_solteira++
            }
        }
        contador++

        console.log('1 = Masculino, 2 = Feminino')
        var sexo = Number(input('Qual seu sexo?: '))
        var idade = Number(input('Qual sua idade?: '))
        console.log('1 = Casado(a), 2 = Solteiro(a), 3 = Divorciado(a), 4 = Viúvo(a)')
        var estadoc = Number(input('Qual seu estado civil?: '))
    }
    
    let media_i_homen = idade_homen / homen
    let media_i_mulher = idade_mulher / mulher
    let percentual_h_solteiro = (homen_solteiro / 10) * 100
    let percentual_m_solteira = (mulher_solteira / 10) * 100

    // Saída
    console.log(media_i_homen,media_i_mulher,percentual_h_solteiro,percentual_m_solteira)
    }
}