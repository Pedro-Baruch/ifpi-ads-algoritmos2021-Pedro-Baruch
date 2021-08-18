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
            printf("Masculino!\n");
            break;
        } case 'F': {
            printf("Feminino!\n");
            break;
        } default :{
            printf("Invalido!\n");
            break;
        }
    }

    system("PAUSE");
}