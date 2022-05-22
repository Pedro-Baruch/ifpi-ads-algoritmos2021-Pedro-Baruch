#include <stdio.h>

int main(){

    int matricula,aprovados,reprovados;
    float nota1,nota2,nota3,media_final;

    aprovados = 0;
    reprovados = 0;

    while(matricula != 0){
        printf("Insira sua matricula: ");
        scanf("%i",&matricula);
        printf("Insira suas 3 notas abaixo\n");
        printf("Nota1: ");
        scanf("%f",&nota1);
        printf("Nota2: ");
        scanf("%f",&nota2);
        printf("Nota3: ");
        scanf("%f",&nota3);
        
        media_final = ((2*nota1) + (3*nota2) +(5*nota3)) / 10;

        if(media_final >= 7){
            aprovados++;
        }else if(media_final < 7){
            reprovados++;
        }
    }

    printf("Alunos aprovados: %i\n",aprovados);
    printf("Alunos reprovados: %i\n",reprovados);
    printf("Total de alunos: %i\n",aprovados+reprovados);

    system("PAUSE");
}