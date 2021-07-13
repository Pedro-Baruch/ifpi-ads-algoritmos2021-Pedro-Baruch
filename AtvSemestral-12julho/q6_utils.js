function media(valores){
    let media = 0
    for(let i = 0;i < valores.length; i++){
        media += valores[i]
    }
    media = media/valores.length
    return media
}

function maior(valores){
    let maior_valor = 0
    for(let i = 0; i < valores.length; i++){
        if(maior_valor <= valores[i]){
            maior_valor = valores[i]
        }
    }
    return maior_valor
}

function menor(valores){
    let menor_valor = valores[0]
    for(let i = 0; i < valores.length; i++){
        if(menor_valor >= valores[i]){
            menor_valor = valores[i]
        }
    }
    return menor_valor
}

function positivos(valores){
    let pst = 0 // abreviação para positivo
    for(let i = 0; i < valores.length; i++){
        if(valores[i] > 0){
            pst++
        }
    }

    return pst
}   

function negativos(valores){
    let ngt = 0 // abreviação para negativo
    for(let i = 0; i < valores.length; i++){
        if(valores[i] < 0){
            ngt++
        }
    }

    return ngt
}

function repetidos(valores){
    for(let i = 0; i < valores.length; i++){
        for(let j = 0; j < valores.length; j++){
            if(valores[i] !== valores[j] && valores[i] === valores[j]){
                return true
            }else{
                return false
            }
        }
    }
}

module.exports = {
    media,
    maior,
    menor,
    positivos,
    negativos,
    repetidos,
}