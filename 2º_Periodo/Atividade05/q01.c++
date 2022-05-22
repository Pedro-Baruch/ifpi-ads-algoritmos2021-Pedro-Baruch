#include <iostream>
#include <stdio.h>

using namespace std;

typedef struct no {
    int cod;
    char nome[20];
} no;

main(){
    no vetor[10]; // Alocação sequencial estatica
    no *w = (no*)malloc(10*sizeof(no)); // Alocação sequencial dinâmica

    int pos = 0;
    
    no primeiro = {1,"ana maria"};
    no segundo = {2,"carla gomes"};
    no terceiro = {3,"joao pedro"};

    // Primeira for de alocação
    vetor[pos++] = primeiro;
    vetor[pos++] = segundo;
    vetor[pos++] = terceiro;

    // Segunda forma de alocação
    //*(vetor+pos) = primeiro;
    //pos++;
    //*(vetor+pos) = segundo;
    //pos++;
    //*(vetor+pos) = terceiro;
    //pos++;

    cout<<"vetor = "<<vetor<<endl;
    cout<<"valor = "<<(*vetor).cod<<endl;

    for (int i = 0; i < pos; i++)
    {
        cout<<vetor[i].cod<<" - "<<vetor[i].nome<<endl;
    }

    cout<<"pos = "<<pos<<endl;
}