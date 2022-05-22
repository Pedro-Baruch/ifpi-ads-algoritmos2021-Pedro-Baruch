#include <stdio.h>

int main(){
    
    int num,i;

    while(num != 0){
        printf("Insira um valor: ");
        scanf("%i", &num);

        for(i = 1; i<= num; i++){
            if(num % i == 0){
                printf("%i\n",i);
            }
        }    
    }
    system("PAUSE");
}