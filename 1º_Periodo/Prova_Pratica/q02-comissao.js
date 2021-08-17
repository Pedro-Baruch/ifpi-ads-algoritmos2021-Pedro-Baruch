const input = require('prompt-sync')()

function main(){

    // Entrada
    const nome = input('Insira o nome do vendedor: ')
    const vendas = Number(input('Insira o valor total de vendas: '))

    // Processamento
    comissao(vendas)
    const salario_fixo = 1100
    const salario_final = comissao_gerada1 + comissao_gerada2 + super_comissao + 1100
    const total_comissão = comissao_gerada1 + comissao_gerada2 + super_comissao
    
    // Saída
    console.log(`O vendendedor ${nome} gerou:`)
    console.log(`R$ ${comissao_gerada1.toFixed(2)} da primeira comissão`)
    console.log(`R$ ${comissao_gerada2.toFixed(2)} da segunda comissão`) 
    console.log(`R$ ${super_comissao.toFixed(2)} da super comissão`)
    console.log(`Ganhou um total de ${total_comissão.toFixed(2)} de comissão`)
    console.log(`O salário final é de R$ ${salario_final.toFixed(2)}`)
}

// Processamento
function comissao(valor){// Se o valor for menor que ou igual a 5 mil não ganha nenhuma comissão, e todas serão igualadas a 0
    if(valor <= 5000){ 
        comissao_gerada1 = 0
        comissao_gerada2 = 0 
        super_comissao = 0 
    }else if(valor > 5000 && valor <= 10000){// Se o valor for entre 5 mil e 10 mil ganha apenas a 1º comissão, as outras serão igual a 0
        sub_5k = valor - 5000
        comissao_gerada1 = 5/100 * sub_5k
        comissao_gerada2 = 0
        super_comissao = 0 
    }else if(valor > 10000 && valor <= 30000){// Se o valor for entre 10 mil e 30 mil ganha a fatia da 1º e da 2º comissão, e a super comissão é igual 0
        sub_10k = valor - 10000
        comissao_gerada1 = 5/100 * 5000
        comissao_gerada2 = 10/100 * sub_10k
        super_comissao = 0 
    }else if(valor > 30000){// Se o valor for maior que 30 mil ganha apenas a super comissão, e as outras comissões serão igual a 0
        comissao_gerada1 = 0
        comissao_gerada2 = 0
        super_comissao = 20/100 * valor
    }
    return (comissao_gerada1,comissao_gerada2,super_comissao)
}

main()