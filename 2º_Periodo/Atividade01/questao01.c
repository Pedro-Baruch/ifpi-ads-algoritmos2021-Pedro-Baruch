#include <stdio.h>

main()
{
    float ms,kmh;

    // Entrada
    printf("Digite o valor da velociade em m/s: ");
    scanf("%f", &ms);

    // Processamento
    kmh = ms / 3.6;

    // Saída
    printf("O valor em km/h sera de %0.0f\n", kmh);

    system("PAUSE");
}