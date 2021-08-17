#include <stdio.h>

main()
{
    float num1, num2;

    // Entrada
    printf("Insira o valor dos numeros abaixo\n");
    printf("numero 1: ");
    scanf("%f", &num1);
    printf("numero 2: ");
    scanf("%f", &num2);

    // Processamento e saída
    
    if (num1 > num2)
    {
        printf("Maior: num1 = %0.0f\nMenor: num2 = %0.0f", num1, num2);
    }else
    {
        printf("Maior: num2 = %0.0f\nMenor: num1 = %0.0f", num2, num1);
    }
}