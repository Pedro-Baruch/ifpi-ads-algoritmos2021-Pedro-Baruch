const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('--- Insira o valor do seu salário ---')
    let salario = Number(input('--> '))

    // Processamento
    let novo_salario = 0
    let percentual = 0
    let soma_reajuste = 0
    let soma_atual = 0
    
    while (salario !== 0){

        if(salario <= 2999.99){
            percentual = (25/100) * salario
            novo_salario = percentual + salario
        }else if(salario <= 5999.99){
            percentual = (20/100) * salario
            novo_salario = percentual + salario
        }else if(salario <= 9999.99){
            percentual = (15/100) * salario
            novo_salario = percentual + salario
        }else if(salario >= 10000.00){
            percentual = (10/100) * salario
            novo_salario = percentual + salario
        }
        soma_atual += salario 
        soma_reajuste += novo_salario
        
        console.log(`O novo salário é R$ ${novo_salario}`)

        console.log('--- Insira o valor do seu salário ---')
        salario = Number(input('--> '))
    }
    let diferença = soma_reajuste - soma_atual
    console.log(`Soma dos salários atuais R$ ${soma_atual}`)
    console.log(`Soma dos salários reajustados R$ ${soma_reajuste}`)
    console.log(`O valor da diferença é R$ ${diferença}`)   
}

main()