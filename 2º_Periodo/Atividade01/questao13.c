#include <stdio.h>

main()
{
    float valor;

    // Entrada
    printf("Insira um valor: ");
    scanf("%f", &valor);

    // Processamento

    if(valor >= 0){
        printf("Positivo!\n");
    }else{
        printf("Negativo!\n");
    }

    system("PAUSE");
}