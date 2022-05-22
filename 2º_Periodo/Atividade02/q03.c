#include <stdio.h>

int main(){

    int num1,num2,resto,mdc;

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

    mdc = a;

    printf("O mdc entre %i e %i eh de %i\n",num1,num2,mdc);

    system("PAUSE");
}