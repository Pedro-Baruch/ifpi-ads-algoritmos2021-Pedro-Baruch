const input = require('prompt-sync')()

function main(){

    // Entrada
    const n = 8
    const vetor = Array(n)
    for (let i = 0; i < n; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    // Processamento
    let decimal = 0
    // let hexadecimal = ['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001','1010','1011','1100','1101','1110','1111']
    let hexadecimal = ''

    for(let i = 0, j = n-1; i < n, j > -1; i++, j--){
        decimal = decimal + (vetor[i] * Math.pow(2,j))
    }

    let decimal2 = decimal

    for(let i = 0; i < n; i++){
        hexadecimal = (decimal2 % 16) + String(hexadecimal)
        divisao = Math.floor(decimal2 / 16)
        decimal2 = divisao
        if(decimal2 === 0){
            break
        }
    }

    // Saída
    console.log(`Valor em hexadecimal = ${hexadecimal}`)
    console.log(`Valor em decimal = ${decimal}`)
}

main()