#include <stdio.h>

main()
{
    int dia, mes, ano;

    // Entrada
    printf("Insira uma data:\n");
    printf("Dia: ");
    scanf("%i", &dia);
    printf("Mes: ");
    scanf("%i", &mes);
    printf("Ano: ");
    scanf("%i", &ano);

    // Processamento

    if(mes == 2 && dia > 0 && dia <= 28){
        printf("Data valida!\n");
    }else if(mes > 0 && mes <= 12 && dia > 0 && dia <= 31){
        printf("Data valida!\n");
    }else{
        printf("Data invalida!\n");
    }

    system("PAUSE");
}