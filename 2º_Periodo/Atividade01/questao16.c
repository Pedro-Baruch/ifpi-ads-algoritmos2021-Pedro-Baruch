#include <stdio.h>

main ()
{
    float preco1,preco2,preco3;

    // Entrada
    printf("Informe o preco de 3 produtos\n");
    printf("Produto 1: ");
    scanf("%f", &preco1);
    printf("Produto 2: ");
    scanf("%f", &preco2);
    printf("Produto 3: ");
    scanf("%f", &preco3);

    // Processamento

    if(preco1 < preco2 && preco1 < preco3){
        printf("Compre o primeiro produto.");
    }else if(preco2 < preco3 && preco2 < preco1){
        printf("Compre o segundo produto.");
    }else if(preco3 < preco2 && preco3 < preco1){
        printf("Compre o terceiro produto.");
    }   
}