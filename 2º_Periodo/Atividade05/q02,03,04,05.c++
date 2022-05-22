#include <stdio.h>
#include <iostream>
#include <vector>

using namespace std;

typedef struct no{
    int x;
    char nome[20];
}no;

no lista[10];
int pos = 0;

// Q02 incluir
void incluir(no novo){
    lista[pos++] = novo;
}

// Q03 procurar
int procurar(int mat){
    
    bool achou = false;

    for(int i = 0; i < pos; i++){
        if(lista[i].x == mat){
            achou = true;
            return i;
        }
    }
    
    if(achou == false){
        return -1;
    }

}

// Q04 mostrar
void mostra(){
    for(int i = 0; i < pos; i++){
        cout<<lista[i].x<<" - "<<lista[i].nome<<endl;
    }
}

// Q05 remover
void removeUltimo(){
    pos--;
}

void removePrimeiro(){
    for(int i = 0; i < pos; i++){
        lista[i] = lista[i+1];
    }
    pos--;
}

void removeQualquer(int posicao){
    for(int k = posicao; k < pos; k++){
        lista[k] = lista[k+1];
    }
    pos--;
}


main(){
    
    // Função incluir
    no primeiro = {0,"maria"};
    no segundo = {1,"joao"};
    no terceiro = {2,"pedro"};
    incluir(primeiro);
    incluir(segundo);
    incluir(terceiro);

    // Função procura
    int r = procurar(2);
    
    cout<<"r = "<<r<<endl;

    // Função mostra
    mostra();
    cout<<"--------------------"<<endl;

    // Função remove
    int posicao;
    cout<<"Matricula do aluno que ira ser removido"<<endl;
    cin>>posicao;
    removeQualquer(posicao);
    
    //removeUltimo();
    //removePrimeiro();
    
    mostra();
}