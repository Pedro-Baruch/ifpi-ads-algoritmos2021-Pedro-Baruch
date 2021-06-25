const input = require('prompt-sync')()

function main(){

    // Entrada
    const fichas = Number(input('Quantidade de fichas: '))

    // Processamento
    cal_salario(fichas)
}

// Processamento
function cal_salario(fichas){

    for(let i = 1;i <= fichas; i++){

        console.log('--------------------------------------------')
        let cod = Number(input('Código de funcionário: '))
        let horas = Number(input('Horas trabalhadas: '))
        let dependentes = Number(input('Número de dependentes: '))

        let salario = horas * 12 + dependentes * 40
        let inss = (8.5 / 100) * salario
        let ir = (5 / 100) * salario
        let salario_liquido = salario - (inss + ir)

        // Saída
        console.log(`Funcionário: ${cod}`)
        console.log(`Salário bruto: R$ ${salario.toFixed(2)}`)
        console.log(`INSS: R$ ${inss.toFixed(2)}`)
        console.log(`IR : R$ ${ir.toFixed(2)}`)
        console.log(`Salário liquido: R$ ${salario_liquido.toFixed(2)}`)
    }
}

main()