// Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
// uma mensagem de permissão de acesso ou não.

const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira sua senha')
    const senha_usuario = input('Senha: ')

    // Processamento
    if (senha_usuario === '1234'){
        console.log('Acesso permitido :)')
    }else{
        console.log('Acesso negado :(')
    }
}

main()
