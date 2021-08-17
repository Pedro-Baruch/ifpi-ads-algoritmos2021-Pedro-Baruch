#include <stdio.h>

main()
{
    float c_dolar, dolar, real;
    printf("---Conversor de dolar em real---\n");
    
    // Entrada
    printf("Insira a contacao do dolar em reais no dia de hoje: ");
    scanf("%f", &c_dolar);
    printf("Insira o valor em dolares para a conversao: ");
    scanf("%f", &dolar);

    // Processamento
    real = dolar * c_dolar;

    // Saída
    printf("O valor em reais e: %0.0f", real);
}