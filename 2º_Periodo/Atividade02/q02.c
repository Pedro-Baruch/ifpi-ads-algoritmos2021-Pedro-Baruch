#include <stdio.h>

int main(){

    int num1,num2,resto,mmc;

    printf("Insira o valor do numero a: ");
    scanf("%i",&num1);
    printf("Insira o valor do numero b: ");
    scanf("%i",&num2);

    int a = num1;
    int b = num2;

    do {
        resto = a % b;

        a = b;
        b = resto;

    } while (resto != 0);

    mmc = (num1 * num2) / a;

    printf("O mmc entre %i e %i eh de %i\n",num1,num2,mmc);

    system("PAUSE");
}