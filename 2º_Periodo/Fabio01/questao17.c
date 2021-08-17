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
            printf("Matutino.");
            break;
        }
        case 'V':{
            printf("Vespertino.");
            break;
        }
        case 'N':{
            printf("Noturno.");
            break;
        }
        default:{
            printf("Valor invalido!");
            break;
        }
    }
}