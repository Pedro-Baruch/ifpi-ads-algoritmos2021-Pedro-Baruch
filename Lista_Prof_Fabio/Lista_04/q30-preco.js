const input = require('prompt-sync')()

function main(){

    // Entrada
    const nome_produto = input('Produto: ')
    const preco_produto = Number(input('Preço: '))
    const quantidade_produto = Number(input('Quantidade: '))

    // Processamento
    pagamento(nome_produto,preco_produto,quantidade_produto)
}

function pagamento(nome,preco,quantidade){
    
    let preco_total = 0
    let valor_final = 0
    let desconto = 0
    var quant = quantidade
    
    while(nome !== 'Fim'){

        if(quant <= 10){
            preco_total = preco * quant
            valor_final = preco_total
        }else if(quant > 10 && quant <= 20){
            preco_total = preco * quant
            desconto = (10/100) * preco_total
            valor_final = preco_total - desconto
        }else if(quant > 20 && quant <= 50){
            preco_total = preco * quant
            desconto = (20/100) * preco_total
            valor_final = preco_total - desconto
        }else if(quant > 50){
            preco_total = preco * quant
            desconto = (25/100) * preco_total
            valor_final = preco_total - desconto
        }

        // Saída
        console.log(`O valor final a se pagar pelo(a) ${nome} é R$ ${valor_final}`)
        
        // Entrada
        nome = input('Produto: ')
        preco = Number(input('Preço: '))
        quant = Number(input('Quantidade: '))
    }
}

main()