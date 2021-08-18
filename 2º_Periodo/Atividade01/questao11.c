#include <stdio.h>

main()
{
    float valor1,valor2,resultado;
    int operacao;

    // Entrada
    printf("Insira dois valores:\n");
    printf("Valor1: ");
    scanf("%i", &valor1);
    printf("Valor2: ");
    scanf("%i", &valor2);
    printf("Insira um valor para a operacao: 1 = Adicao / 2 = Subtracao / 3 = Multiplicacao / 4 = Divisao\n");
    printf("Valor: ");
    scanf("%i", &operacao);

    // Processamento

    switch (operacao){
        case 1: {
            resultado = valor1 + valor2;
            printf("Resultado da soma: %i\n", resultado);
            break;
        }
        case 2: {
            resultado = valor1 - valor2;
            printf("Resultado da subtracao: %i\n", resultado);
            break;
        }
        case 3: {
            resultado = valor1 * valor2;
            printf("Resultado da multiplicacao: %i\n", resultado);
            break;
        }
        case 4: {
            resultado = valor1 / valor2;
            printf("Resultado da divisao: %i\n", resultado);
            break;
        }
        default: {
            printf("operacao invalida\n");
        }
    }

    system("PAUSE");
}