#include <stdio.h>

main()
{
    char letra;

    // Entrada
    printf("Digite uma letra: ");
    scanf("%c", &letra);

    // Processamento

    switch (letra){
        case 'a': {
            printf("Vogal!\n");
            break;
        }
        case 'e': {
            printf("Vogal!\n");
            break;
        }
        case 'i': {
            printf("Vogal!\n");
            break;
        }
        case 'o': {
            printf("Vogal!\n");
            break;
        }
        case 'u': {
            printf("Vogal!\n");
            break;
        }
        case 'A': {
            printf("Vogal!\n");
            break;
        }
        case 'E': {
            printf("Vogal!\n");
            break;
        }
        case 'I': {
            printf("Vogal!\n");
            break;
        }
        case 'O': {
            printf("Vogal!\n");
            break;
        }
        case 'U': {
            printf("Vogal!\n");
            break;
        }
        default : {
            printf("Consoante!\n");
            break;
        }
    }

    system("PAUSE");
}