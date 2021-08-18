#include <stdio.h>

main()
{
    float min, hrs, min_final;

    // Entrada
    printf("Digite um horario\n");
    printf("Horas: ");
    scanf("%f", &hrs);
    printf("Minutos: ");
    scanf("%f", &min);

    // Processamento
    min_final = (hrs * 60) + min;

    // Saída
    printf("Equivale a %0.0f minutos\n", min_final);

    system("PAUSE");
}