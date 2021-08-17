const input = require('prompt-sync')()

function main(){

    // Entrada
    let nome = input('Nome modelo: ')
    let peso = Number(input('Peso(KG) modelo: '))
    let altura = Number(input('Altura(M) modelo: '))

    // Processamento
    let mais_alta = 0
    let mais_alta_nome = 0
    let mais_baixa = 100000000
    let mais_baixa_nome = 0
    let mais_gorda = 0
    let mais_gorda_nome = 0
    let mais_magra = 100000000
    let mais_magra_nome = 0

    while(nome !== 'Fim'){
        if(altura > mais_alta){
            mais_alta = altura
            mais_alta_nome = nome
        }
        if(altura < mais_baixa){
            mais_baixa = altura
            mais_baixa_nome = nome
        }
        if(peso > mais_gorda){
            mais_gorda = peso
            mais_gorda_nome = nome
        }
        if(peso < mais_magra){
            mais_magra = peso
            mais_magra_nome = nome
        }
        
        
        nome = input('Nome modelo: ')
        peso = Number(input('Peso modelo: '))
        altura = Number(input('Altura modelo: '))
    }

    console.log(`A modelo mais alta é ${mais_alta_nome} com ${mais_alta} metros`)
    console.log(`A modelo mais baixa é ${mais_baixa_nome} com ${mais_baixa} metros`)
    console.log(`A modelo mais magra é ${mais_magra_nome} com ${mais_magra} quilos`)
    console.log(`A modelo mais gorda é ${mais_gorda_nome} com ${mais_gorda} quilos`)
}

main()