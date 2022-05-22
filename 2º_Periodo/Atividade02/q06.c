#include <stdio.h>

int main(){

    float salario,novo_salario;

    while(salario != 0){
        printf("Insira seu salario: ");
        scanf("%f", &salario);

        if(salario <= 2999){
            novo_salario = salario + (salario * 0.25);
        }else if(salario >= 3000 && salario <= 5999){
            novo_salario = salario + (salario * 0.20);
        }else if(salario >= 6000 && salario <= 9999){
            novo_salario = salario + (salario * 0.15);
        }else if(salario >= 10000){
            novo_salario = salario + (salario * 0.10);
        }

        printf("Esse sera o novo salario: R$%0.2f\n", novo_salario);
    }
}