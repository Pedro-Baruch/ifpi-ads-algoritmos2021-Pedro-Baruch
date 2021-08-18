#include <stdio.h>

main()
{
    float num1, num2, num3, maior;

    // Entrada
    printf("Insira o valor dos numeros abaixo\n");
    printf("numero 1: ");
    scanf("%f", &num1);
    printf("numero 2: ");
    scanf("%f", &num2);
    printf("numero 3: ");
    scanf("%f", &num3);

    // Processamento e Saída
    
    if(num1 > num2 && num1 > num3){
        printf("O numero 1 eh o maior com valor: %f",num1);
    }else if(num2 > num1 && num2 > num3){
        printf("O numero 2 eh o maior com valor: %f",num2);
    }else if(num3 > num2 && num3 > num1){
        printf("O numero 3 eh o maior com valor: %0.2f\n",num3);
    }

    system("PAUSE"); 
}