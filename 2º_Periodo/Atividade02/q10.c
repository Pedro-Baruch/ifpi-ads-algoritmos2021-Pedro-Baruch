#include <stdio.h>
#include <string.h>

int main () {
   char nome1[20];
   char nome2[20];
   int iguais,diferentes;
   iguais = 0;
   diferentes = 0;

    printf("Insira uma string: ");
    scanf("%s",&nome1);
    printf("Insira outra string: ");
    scanf("%s",&nome2);

    for(int i = 0; i <= 20; i++){
        if(nome1[i] == nome2[i]){
            iguais++; 
        }else{
            diferentes++;
        }
    }

    printf("%i", diferentes);

    if(diferentes > 0){
        printf("Sao diferentes!");
    }else{
        printf("Sao iguais!");
    }
}