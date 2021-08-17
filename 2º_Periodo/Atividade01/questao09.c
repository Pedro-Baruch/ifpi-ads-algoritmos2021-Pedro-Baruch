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

    if(dia > 0 && dia <= 31 && mes > 0 && mes <= 12){ 
        if(mes == 2 && dia <= 28){
            printf("Data valida!");
        }else{
            printf("Data invalida!");
        }
    }else{
        printf("Data invalida!");
    }
}