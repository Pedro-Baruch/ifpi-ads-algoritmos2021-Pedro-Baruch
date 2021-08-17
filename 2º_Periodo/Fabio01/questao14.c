#include <stdio.h>

main()
{
    char sexo;
    
    // Entrada
    printf("Insira M para masculino e F para feminino: ");
    scanf("%c", &sexo);

    // Processamento

    switch (sexo){
        case 'M': {
            printf("Masculino!");
            break;
        } case 'F': {
            printf("Feminino!");
            break;
        } default :{
            printf("Invalido!");
            break;
        }
    }
}