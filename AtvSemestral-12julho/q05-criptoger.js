const input = require('prompt-sync')()

function main(){

    // Entrada
    let string = input('Frase: ')

    // Processamento
    let [string1,string2] = quebrarMeio(string)
    let inversao = inverter(string1,string2)
    let vogais_numeros = vogaisNumeros(inversao)
    let numeros_vogais = numerosVogais(vogais_numeros)
    let consoantes_10 = consoante(numeros_vogais)
    
    // Saída
    console.log(`Sua frase criptografada: ${consoantes_10}`)

}

function quebrarMeio(string){
    let nova_string = ['','']
    let metade = string.length/2

    for(let i = 0; i < Math.floor(metade); i++){
        nova_string[0] += string[i]
    }
    for(let i = Math.floor(metade); i < string.length; i++){
        nova_string[1] += string[i] 
    }

    return nova_string
}

function inverter(string1,string2){
    let inversao = ['','']

    for(let i = string1.length - 1 ; i >= 0; i--){
        inversao[0] += string1[i]
    }

    for(let i = string2.length - 1; i >= 0; i--){
        inversao[1] += string2[i]
    }

    return inversao
}

function vogaisNumeros(inversao){
    let string = inversao[0] + inversao[1]
    let string_v_n = ''

    for(let i = 0; i < string.length; i++){
        if(string[i] === 'a' || string[i] === 'A'){
            string_v_n += 1
        }else if(string[i] === 'e' || string[i] === 'E'){
            string_v_n += 2
        }else if(string[i] === 'i' || string[i] === 'I'){
            string_v_n += 3
        }else if(string[i] === 'o' || string[i] === 'O'){
            string_v_n += 4
        }else if(string[i] === 'u' || string[i] === 'U'){
            string_v_n += 5
        }else{
            string_v_n += string[i]
        }
    }

    return string_v_n
}

function numerosVogais(string){
    let nova_string = ''

    for(let i = 0; i < string.length; i++){
        if(string[i] === '1'){
            nova_string += '*'
        }else if(string[i] === '2'){
            nova_string += '**'
        }else if(string[i] === '3'){
            nova_string += '***'
        }else if(string[i] === '4'){
            nova_string += '****'
        }else if(string[i] === '5'){
            nova_string += '*****'
        }else if(string[i] === '6'){
            nova_string += '******'
        }else if(string[i] === '7'){
            nova_string += '*******'
        }else if(string[i] === '8'){
            nova_string += '********'
        }else if(string[i] === '9'){
            nova_string += '*********'
        }else if(string[i] === '0'){
            nova_string += '#'
        }else{
            nova_string += string[i]
        }
    }

    return nova_string
}


function consoante(string){
    let ascii = 0
    let nova_string = ''

    for(let i = 0; i < string.length; i++){
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
            ascii = string.charCodeAt(i) + 10
            if(ascii > 90){
                ascii -= 26
            }
            nova_string += String.fromCharCode(ascii)
        }else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
            ascii = string.charCodeAt(i) + 10
            if(ascii > 122){
                ascii -= 26
            }
            nova_string += String.fromCharCode(ascii)
        }else{
            nova_string += string[i]
        }   
    }

    return nova_string
}
main()