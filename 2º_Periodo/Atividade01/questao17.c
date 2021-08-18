#include <stdio.h>

main ()
{
    char turno;

    // Entrada
    printf("Informe o turno em que estuda: ");
    scanf("%c", &turno);

    // Processamento e Saída
    
    switch (turno){
        case 'M':{
            printf("Matutino.\n");
            break;
        }
        case 'V':{
            printf("Vespertino.\n");
            break;
        }
        case 'N':{
            printf("Noturno.\n");
            break;
        }
        default:{
            printf("Valor invalido!\n");
            break;
        }
    }

    system("PAUSE");
}