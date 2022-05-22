#include <iostream>
#include <cstring>
#include <stdio.h>

using namespace std;

typedef struct no{
    int valor;
    no *proximo;
}no;

typedef struct{
    no *inicio;
    int tam;
}lis;

void inserirInicio(lis *lista,int v){

    no *novoNo;

    novoNo = (no *)malloc(sizeof(no));

    novoNo->valor = v;
    novoNo->proximo = lista->inicio;

    lista->inicio = novoNo;
    lista->tam++;
}

void inserirFinal(lis *lista, int v){

    no *novo,*novoNo;

    novoNo = (no *)malloc(sizeof(no));
    novo = (no *)malloc(sizeof(no));

    novoNo->valor = v;
    novoNo->proximo = NULL;

    if(lista->inicio == NULL){
        lista->inicio = novoNo;
    }else{
        novo = lista->inicio;
        while(novo->proximo != NULL)
            novo = novo->proximo;
        novo->proximo = novoNo;
    }

    lista->tam++;
}

void remover(lis *lista,int v){

    no *i = lista->inicio;
    no *noRemover = NULL;

    if(i != NULL && lista->inicio->valor == v){
        noRemover = lista->inicio;
        lista->inicio = noRemover->proximo;
    }else{
        while(i != NULL && i->proximo != NULL && i->proximo->valor != v){
            i = i->proximo;
        }

        if(i != NULL && i->proximo != NULL){
            noRemover = i->proximo;
            i->proximo = noRemover->proximo;
        }
    }

    if(noRemover){
        free(noRemover);
        lista->tam--;
    }
}

void imprimir(lis *lista){
    
    no *i = lista->inicio;
    
    printf("\nTamanho da lista: %d\n", lista->tam);

    while(i != NULL){
        printf("%d\n",i->valor);
        i = i->proximo;
    }
}

int main(){
    lis lista;

    int opcao,valor;

    lista.inicio = NULL;
    lista.tam = 0;
    
    do{
        printf("\n1 - Inserir no inicio\n2 = Imprimir\n3 - Inserir no fim\n4 - Remover\n5 - Sair\n\n");
        scanf("%d", &opcao);

        switch(opcao){
            case 1:
                printf("\ndigite um valor a ser inserido: ");
                scanf("%d", &valor);
                
                inserirInicio(&lista, valor);
                break;
            case 2:
                imprimir(&lista);
                break;
            case 3:
                printf("\ndigite um valor a ser inserido: ");
                scanf("%d", &valor);
                
                inserirFinal(&lista, valor);
                break;
            case 4:
                printf("\ndigite um valor a ser removido: ");
                scanf("%d", &valor);

                remover(&lista, valor);
                break;
            case 5:
                printf("\nFinalizando...\n");
                break;
            default:
                printf("\nOpcao invalida!\n");
                break;
        }
    }while(opcao != 5);
}