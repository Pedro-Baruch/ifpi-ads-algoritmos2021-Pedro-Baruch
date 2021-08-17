#include <stdio.h>

main()
{
    float kmh, ms;

    // Entrada
    printf("Insira  a velocidade em km/h: ");
    scanf("%f", &kmh);

    // Processamento
    ms = kmh * 3.6;

    // Saída
    printf("Velocidade em m/s: %0.2f", ms);
}