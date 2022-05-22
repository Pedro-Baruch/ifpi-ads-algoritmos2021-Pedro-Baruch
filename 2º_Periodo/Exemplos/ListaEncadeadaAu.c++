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

elemento *inserir_direita(elemento *lista, int v,char n[20]){
    elemento *novoElemento,*primeiro;

    // Novo elemento
    primeiro = lista;
    novoElemento = (elemento *)malloc(sizeof(elemento));
    
    // Dados do novo elemento
    novoElemento->valor = v;
    strcpy(novoElemento->nome,n);

    // Encadeamento
    novoElemento->proximo = NULL;

    if(lista != NULL){

        while(lista->proximo != NULL){
            lista = lista->proximo;
        }
        
        lista->proximo = novoElemento;
        return primeiro;
    }else{
        return novoElemento;
    }

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

int procura(elemento *aux, int v){

    bool achou = false;
    
    while(aux != NULL){
            if(aux->valor == v){
                achou = true;
                return aux->valor;
            }
        aux = aux->proximo;
    }

    if(achou == false){
        return -1;
    }
    
}



main(){
    elemento *inicio;

    inicio = NULL;

    // Inserir na ultima posição
    inicio = inserir_direita(inicio, 3, "Marcos");
    inicio = inserir_direita(inicio, 4, "Ricardo");
    
    // Inserir na primeira posição da lista
    inicio = inserir_esquerda(inicio, 2, "lucas");
    inicio = inserir_esquerda(inicio, 1, "Maria");

    // Procura
    int search = procura(inicio,2);

    cout<<"Procura: "<<search<<endl; // valor -1 não encontrou o elemento

    // Listar
    listar(inicio);
}