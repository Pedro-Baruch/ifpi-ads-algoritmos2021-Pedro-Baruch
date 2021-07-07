const input = require('prompt-sync')()

function obterTexto(descricao){
    return input(descricao)
}

function obterNumero(descricao){
    return Number(input(descricao))
}

function obterInteiro(descricao){
    return Math.trunc(obterNumero(descricao))
}

function obterIntPositivo(descricao){
    let num = obterInteiro(descricao)

    while (num < 1){
        num = obterInteiro('Valor inválido:' + descricao)
    }
}
// Common JS
module.exports = {
    obterTexto, obterNumero, obterInteiro, obterIntPositivo
}
