#include <iostream>
#include <stdio.h>
#include <cstring>

using namespace std;

typedef struct no{
    int matricula;
    char nome[20];
    no *prox;
}no;

main(){
    no *primeiro = (no*)(malloc(sizeof(no)));
    primeiro->matricula=1;
    strcpy(primeiro->nome,"joao");
    primeiro->prox=NULL;

    no *segundo = (no*)(malloc(sizeof(no)));
    segundo->matricula=1;
    strcpy(segundo->nome,"carlos");
    segundo->prox=NULL;
}