#include <stdio.h>

main()
{
    float n1, n2, n3, media;
    
    // Entrada
    printf("Digite 3 notas: ");
    scanf("%f %f %f", &n1, &n2, &n3);
    
    // Processamento
    media = (n1 + n2 + n3) / 3;
    
    // Saída
    printf("A media e %0.0f", media);
}