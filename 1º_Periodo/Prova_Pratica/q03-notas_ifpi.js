const input = require('prompt-sync')()

function main(){

    // Entrada
    const avaliacao1 = Number(input('Nota da primeira avaliação: '))
    const avaliacao2 = Number(input('Nota da segundo avaliação: '))
    const atividade = Number(input('Nota das atividades: '))

    // Processamento
    const media_semestral = (avaliacao1 * 2 + avaliacao2 * 3 + atividade * 1) / 6
    situação(media_semestral)

    // Saída
    console.log(`O aluno está ${situacao} com média ${media_semestral}`)
    
    
    if (situacao === 'Prova Final'){// Essa saída só aparecerá se o aluno ficar de prova final
        console.log(`O aluno está ${situacao_pos_pf} com média ${media_pos_pf}`) 
    }
}

// Processamento
function situação(valor){
    
    if (valor >= 7){// Se o valor for maior que ou igual a 7 a variável situacao terá valor da string 'Aprovado'
        situcao = 'Aprovado'
        return situacao 
    }else if(valor <= 4){// Se o valor for menor que ou igual a 4 a variável situacao terá valor da string 'Reprovado'
        situacao = 'Reprovado'
        return situacao 
    }else{// Se nenhuma das outras condições forem atendidas a variável situacao terá valor da string 'Prova Final'
        situacao = 'Prova Final' 
        
        // Como o aluno está de prova final sua nota nela é requerida
        const nota_final = Number(input('Nota Prova Final: ')) 
        media_pos_pf = (nota_final + valor) / 2
            
            if(media_pos_pf >= 6){ // Se a média pós-pf for maior que ou igual a 6 a variável situacao_pos_pf terá valor de 'Aprovado Pós-PF'
                situacao_pos_pf = 'Aprovado Pós-PF'
            }else if(media_pos_pf < 6){// Se a média pós-pf for menor que 6 a variável situacao_pos_pf terá valor de 'Reprovado Pós-PF'
                situacao_pos_pf = 'Reprovado Pós-PF' 
            }
        return situacao,media_pos_pf,situacao_pos_pf
    }
}

main()