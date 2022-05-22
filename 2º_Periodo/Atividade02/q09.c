#include <stdio.h>

int main () {
   char nome1[20];
   char nome2[20];
   int comparacao;

    printf("Insira uma string: ");
    scanf("%s",&nome1);
    printf("Insira outra string: ");
    scanf("%s",&nome2);

   comparacao = strcmp(nome1, nome2);

   if(comparacao < 0) {
      printf("Sao diferentes!");
   } else if(comparacao > 0) {
      printf("Sao diferentes!");
   } else {
      printf("Sao iguais!");    
   }
   
   return(0);
}