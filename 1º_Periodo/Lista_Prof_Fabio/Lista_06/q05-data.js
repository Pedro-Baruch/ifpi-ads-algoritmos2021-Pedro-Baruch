const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira uma fata DD/MM/AAAA')
    const data = input('')

    // Processamento
    let quebra = data.split('/')
    let mes = escrevendo_mes2(data)
    let ano = quebra[2]

    // Saída
    console.log(`${mes} do ${ano}`)
}

function escrevendo_mes2(data){
    let meses = [0,'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    let quebra = data.split('/')
    let mes = Number(quebra[1])
    let mes_extenso = meses[mes]
    return mes_extenso
}

main()