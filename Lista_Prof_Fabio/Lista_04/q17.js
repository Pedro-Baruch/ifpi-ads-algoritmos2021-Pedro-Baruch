const input = require('prompt-sync')()

function main(){

    // Entrada
    let nome = input('Nome modelo: ')
    let peso = Number(input('Peso(KG) modelo: '))
    let altura = Number(input('Altura(M) modelo: '))

    // Processamento
    let mais_alta = 0
    let mais_alta_nome = 0
    let mais_baixa = 0
    let mais_baixa_nome = 0
    let mais_gorda = 0
    let mais_gorda_nome = 0
    let mais_magra = 0
    let mais_magra_nome = 0

    while(!(nome === 'Fim')){
        

        
        
        nome = input('Nome modelo: ')
        peso = Number(input('Peso modelo: '))
        altura = Number(input('Altura modelo: '))
    }
}

main()