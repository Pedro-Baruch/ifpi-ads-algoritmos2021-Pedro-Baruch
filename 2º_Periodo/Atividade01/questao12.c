#include <stdio.h>

main()
{
    int dia1,mes1,ano1,dia2,mes2,ano2;

    // Entrada
    printf("Insira duas datas:\n");
    printf("Primeiro dia: ");
    scanf("%i", &dia1);
    printf("Primeiro mes: ");
    scanf("%i", &mes1);
    printf("Primeiro ano: ");
    scanf("%i", &ano1);
    printf("--------------------------\n");
    printf("Segundo dia: ");
    scanf("%i", &dia2);
    printf("Segundo mes: ");
    scanf("%i", &mes2);
    printf("Segundo ano: ");
    scanf("%i", &ano2);

    // Processamento e Saída
    
    if(ano1 > ano2){
        printf("Primeira data eh mais recente!");
    }else if(ano2 > ano1){
        printf("Segunda data eh mais recente!");
    }else if(ano1 == ano2){
        if(mes1 > mes2){
            printf("Primeira data eh mais recente!");
        }else if(mes2 > mes1){
            printf("Segunda data eh mais recente!");
        }else if(mes1 == mes2){
            if(dia1 > dia2){
                printf("Primeira data eh mais recente!");
            }else if(dia2 > dia1){
                printf("Segunda data eh mais recente!");
            }else if(dia1 == dia2){
                printf("As datas são iguais!");
            }
        }
    }

}