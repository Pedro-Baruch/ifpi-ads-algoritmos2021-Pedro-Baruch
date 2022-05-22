#include <stdio.h>

int main(){

    float x,n,divisao;

    printf("Insira o valor de X: ");
    scanf("%f", &x);
    printf("Insira o valor de N: ");
    scanf("%f", &n);

    for(int i = 0; n > 2; n--){
        divisao = x / n;
        x = divisao;    
    }

    printf("%0.2f\n", divisao);

    system("PAUSE");
}