const input = require('prompt-sync')()

function main(){ 
    
    // Entrada
    const quant_combustivel = Number(input('Insira a quantidade de combustivel em Litros: '))
    combustivel(quant_combustivel)
    const quant_conteiners = Number(input('Insira a quantidade de conteiners: '))
    carga(quant_conteiners)
    
    console.log(peso_combustivel,soma_carga)
   
}   

// Calcula a quantidade de combustivel
function combustivel(valor){

    while(valor < 10000){
        console.log('O valor minimo de combustivel é de 10.000L')
        valor = Number('Insira uma quantidade maior que 10.000L : ') 
    }
    peso_combustivel = valor * 1.5
    
    return peso_combustivel
}

// Calcula o peso da carga
function carga(valor){

    let peso_conteiner = 0 
    let soma_carga = 0 
    let contador = 1
    
    while(contador <= valor){
        peso_conteiner = Number(input(`Insira o peso do conteiner número ${contador++} em kg: `))
        soma_carga = soma_carga + peso_conteiner
    }
    return soma_carga
}

main()