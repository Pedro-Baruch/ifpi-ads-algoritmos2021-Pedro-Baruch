#include <stdio.h>

int main(){

    float num,divisao,i;

    printf("Insira um valor: ");
    scanf("%f",&num);

    do{
        divisao = num / 2;
        num = divisao;
    }while(divisao > 1);

    printf("Resultado da ultima divisao: %0.2f\n", divisao);

    system("PAUSE");
}