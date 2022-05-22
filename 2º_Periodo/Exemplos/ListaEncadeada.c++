#include <stdio.h>
#include <iostream>
#include <cstring>

using namespace std;

typedef struct elemento{
    int valor;
    char nome[20];
    elemento *proximo;
}elemento;

void listar(elemento *aux){
    
    while(aux != NULL){
        cout<<aux->valor<<" - "<<aux->nome<<endl;
        aux = aux->proximo;
    }
}

void inserir_direita(elemento *lista, int v,char n[20]){
    elemento *novoElemento;

    // Novo elemento
    novoElemento = (elemento *)malloc(sizeof(elemento));
    
    // Dados do novo elemento
    novoElemento->valor = v;
    strcpy(novoElemento->nome,n);

    // Encadeamento
    novoElemento->proximo = NULL;

    while(lista->proximo != NULL){
        lista = lista->proximo;
    }

    lista->proximo = novoElemento;
}

elemento *inserir_esquerda(elemento *lista,int v, char n[20]){
    elemento *novoElemento;

    // Novo elemento
    novoElemento = (elemento *)malloc(sizeof(elemento));
    
    // Dados do novo elemento
    novoElemento->valor = v;
    strcpy(novoElemento->nome,n);

    // Encadeamento
    novoElemento->proximo = lista;

    return novoElemento;
}



main(){
    elemento *primeiro,*segundo,*terceiro,*quarto;

    // Elementos
    primeiro = (elemento *)malloc(sizeof(elemento));
    segundo = (elemento *)malloc(sizeof(elemento));
    terceiro = (elemento *)malloc(sizeof(elemento));
    quarto = (elemento *)malloc(sizeof(elemento));

    // Dados de cada elemento
    primeiro->valor = 1;
    strcpy(primeiro->nome,"Joao");

    segundo->valor = 2;
    strcpy(segundo->nome,"Pedro");

    terceiro->valor = 3;
    strcpy(terceiro->nome,"Carla");

    quarto->valor = 4;
    strcpy(quarto->nome,"Maria");

    // Encadeamento
    primeiro->proximo = segundo;
    segundo->proximo = terceiro;
    terceiro->proximo = quarto;
    quarto->proximo = NULL;

    // Inserir na ultima posição
    inserir_direita(primeiro, 5, "Marcos");
    inserir_direita(primeiro, 6, "Ricardo");
    
    // Inserir na primeira posição da lista
    primeiro = inserir_esquerda(primeiro, 10, "lucas");
    primeiro = inserir_esquerda(primeiro, 11, "Mateus");

    // Listar
    listar(primeiro);
}