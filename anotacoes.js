// Anotações sobre string
function main(){
    
    // Entrada
    const texto = 'Pedro Baruch'

    // Processamento
    pegar_substring(texto, 0, 5)
    contar_caractere(texto, 'r')
}

// Processamento
function pegar_substring(texto, pos_inicial, pos_final){

    let novo_texto = ''

    for(let i = pos_inicial; i <= pos_final; i++){
        novo_texto = novo_texto + texto[i]
    }
    
    // Saída
    console.log(novo_texto)
}

function contem_caractere(texto, caractere){

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === caractere){
            return true
        }else{
            return false
        }
    }
}

function contar_caractere(texto, caractere){
    
    let i = 0

    for(letra of texto){
        if(letra === caractere){
            i++
        }
    }
    console.log(i)
}

main()

