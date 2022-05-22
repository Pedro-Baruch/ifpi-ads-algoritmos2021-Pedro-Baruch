#include <stdio.h>

int main(){

    float voto,serra,dilma,ciro,indeciso,outros,nulo,total,percentual_serra,percentual_dilma,percentual_ciro,percentual_indeciso,percentual_outros,percentual_nulo;

    serra = 0;
    dilma = 0;
    ciro = 0;
    indeciso = 0;
    outros = 0;
    nulo = 0;

    while(voto != -1){
        printf("Serra=45, Dilma=13, Ciro Gomes=23, indeciso=99, outros=98, nulo/branco=0.\n");
        printf("Insira um numero correspondente ao seu candidato: ");
        scanf("%f", &voto);

        if(voto == 45){
            serra++;
        }else if(voto == 13){
            dilma++;
        }else if(voto == 23){
            ciro++;
        }else if(voto == 99){
            indeciso++;
        }else if(voto == 98){
            outros++;
        }else if(voto == 0){
            nulo++;
        }else if(voto = -1){
            printf("Fim da votacao!\n");
        }else{
            printf("Valor invalido!\n");
        }
    }

    total = serra + dilma + ciro + indeciso + outros + nulo;
    
    percentual_serra = (serra / total) * 100;
    percentual_dilma = (dilma / total) * 100;
    percentual_ciro = (ciro / total) * 100;
    percentual_indeciso = (indeciso / total) * 100;
    percentual_outros = (outros / total) * 100;
    percentual_nulo = (outros / total) * 100;
    
    printf("Serra: %0.2f / Dilma: %0.2f / Ciro: %0.2f\n",percentual_serra,percentual_dilma,percentual_ciro);
    printf("Percentual de outros: %0.2f\n",percentual_outros);
    printf("Percentual de eleitores indecisos: %0.2f\n",percentual_indeciso);
    printf("Percentual de brancos/nulos: %0.2f\n",percentual_nulo);
    printf("Total de entrevistados: %0.2f\n",total);
    if (percentual_serra > 50 || percentual_dilma > 50 || percentual_ciro > 50){
        printf("Sem segundo turno!\n");
    }else{
        printf("Com segundo turno!\n");
    }

    system("PAUSE");
}