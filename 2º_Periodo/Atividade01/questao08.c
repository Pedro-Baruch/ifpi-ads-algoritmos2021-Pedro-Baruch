#include <stdio.h>

main()
{
    int num,dezena,unidade;

    // Entrada
    printf("Insira um numero de duas unidade: ");
    scanf("%i", &num);

    // Processamento
    
    unidade = num % 10;
    dezena = ((num - unidade) / 10) % 10;

    if(unidade == dezena){
        printf("Os algarismos sao iguais!");
    }else{
        printf("Os algarismos sao diferentes!\n");
    }

    system("PAUSE");
}