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
            printf("Vogal!");
            break;
        }
        case 'e': {
            printf("Vogal!");
            break;
        }
        case 'i': {
            printf("Vogal!");
            break;
        }
        case 'o': {
            printf("Vogal!");
            break;
        }
        case 'u': {
            printf("Vogal!");
            break;
        }
        case 'A': {
            printf("Vogal!");
            break;
        }
        case 'E': {
            printf("Vogal!");
            break;
        }
        case 'I': {
            printf("Vogal!");
            break;
        }
        case 'O': {
            printf("Vogal!");
            break;
        }
        case 'U': {
            printf("Vogal!");
            break;
        }
        default : {
            printf("Consoante!");
            break;
        }
    }
    
}