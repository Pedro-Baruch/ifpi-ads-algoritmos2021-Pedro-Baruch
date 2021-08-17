const { obterInteiro, obterTexto } = require("../u");

function main(){

    // Entrada
    const total_cobaias = obterInteiro('Quantidade de cobaias: ')
    
    // Processamento

    let cobaiaS = 0 
    let cobaiaR = 0
    let cobaiaC = 0
    let tipo = ''

    let i = 0
    while(i <= total_cobaias){
        tipoQuantidade = obterInteiro('Insira a quantidade: ')
        tipoTexto = obterTexto('Insira o tipo (S,R,C): ')
    
        if(tipoTexto === 'S'){
            cobaiaS = cobaiaS + Number(tipoQuantidade) 
        }else if(tipoTexto === 'R'){
            cobaiaR = cobaiaR + Number(tipoQuantidade)
        }else if(tipoTexto === 'C'){
            cobaiaC = cobaiaC + Number(tipoQuantidade)
        }

        i += tipo[0]
    }

    console.log(cobaiaC,tipo)
}

main()