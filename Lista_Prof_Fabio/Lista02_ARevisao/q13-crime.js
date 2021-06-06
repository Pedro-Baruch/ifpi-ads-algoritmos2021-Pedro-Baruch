// Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// a) "Telefonou para a vítima ?"
// b) "Esteve no local do crime ?"
// c) "Mora perto da vítima ?"
// d) "Devia para a vítima ?"
// e) "Já trabalhou com a vítima ?"
// O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
// responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
// "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Responde as perguntas com usando S(sim) ou N(não)')
    const pergunta1 = input("Telefonou para a vítima? : ")
    const pergunta2 = input("Esteve no local do crime? : ")
    const pergunta3 = input("Mora perto da vítima? : ")
    const pergunta4 = input("Devia para a vítima? : ")
    const pergunta5 = input("Já trabalhou com a vítima? : ")

    // Processamento
    var repostas_sim = 0
    
    if (pergunta1 === 'S'){
        repostas_sim++
    }
    if(pergunta2 === 'S'){
        repostas_sim++
    }
    if(pergunta3 === 'S'){
        repostas_sim++
    }
    if(pergunta4 === 'S'){
        repostas_sim++
    }
    if(pergunta5 === 'S'){
        repostas_sim++
    }

    if(participação(repostas_sim)){
        console.log('Você é',classificação)
    }
}

function participação(valor){
    if(valor < 2){
        classificação = 'inocente'
        return classificação
    }else if(valor === 2){
        classificação = 'Suspeito(a)'
        return classificação
    }else if(valor === 3 || valor === 4){
        classificação = 'Cumplice'
        return classificação
    }else if(valor === 5){
        classificação = 'Assassino'
        return classificação
    }
        
}

main()