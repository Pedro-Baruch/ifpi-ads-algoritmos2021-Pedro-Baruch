#include <stdio.h>

main()
{
    int nota1,nota2,media,nota_final,media_final;

    // Entrada
    printf("Insira suas notas:\n");
    printf("Nota 1: ");
    scanf("%i", &nota1);
    printf("Nota 2: ");
    scanf("%i", &nota2);

    // Processamento

    media = (nota1 + nota2) / 2;

    if(media >= 7){
        printf("Aprovado!");
    }else{
        printf("O aluno deve fazer prova final!\n");
        printf("Nota prova final: ");
        scanf("%i", &nota_final);

        media_final = (media + nota_final) / 2;

        if(media_final >= 6){
            printf("Aprovado!");
        }else{
            printf("Reprovado!");
        }
    }
}