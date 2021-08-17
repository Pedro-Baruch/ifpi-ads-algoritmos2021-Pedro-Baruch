const input = require('prompt-sync')()

function main(){

    // Entrada
    const med_14dias = Number(input('Média dos ultimos 14 dias: '))
    const med_hoje = Number(input('Média do dia de hoje: '))

    // Processamento
    const variacao = med_hoje - med_14dias 
    const percentual_variacao = (variacao / med_14dias) * 100 // Tranformar a variação em porcentagem
    classificacao(percentual_variacao)

    // Saída
    console.log(`A variação em porcentagem é ${percentual_variacao.toFixed(0)}%, que indica ${classe}`)
}

function classificacao(valor){ // Calculo da classificação
    if(valor > 15){ // Se for maior que 15% a vaiavel classe terá valor da string 'Em alta'
        classe = 'Em alta'
    }else if(valor < 15 && valor >= 0){ // Se for menor que 15% e maior que 0% a vaiavel classe terá valor da string 'Em equilibrio'
        classe = 'Em equilibrio'
    }else{ // Se não antender as outras condições, a variavel classe terá valor da string 'Em queda'
        classe = 'Em queda'
    }
    return classe
}

main()