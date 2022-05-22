#include <stdio.h>
#include <string>
#include <iostream>
using namespace std;

struct livro {
    int cod;
    string nome;
};

typedef struct livro Tlivro;
    Tlivro livros[5];
    int ultimo = 0;

void m1(Tlivro novo){
    if(ultimo<5){
        int p;
        p=-1;

        if(ultimo==0){
            livros[0]=novo;
            ultimo++;
        }else{
            for(int i=0;i<ultimo;i++){
            if(novo.cod<livros[i].cod){
            p=i;
            break;
        }
    }

    //testando o valor de p encontrado
        if  (p==-1) {
            livros[ultimo]=novo;
            ultimo++;
        }else{
            for(int i=ultimo;i>p;i--){
            livros[i]=livros[i-1];
            }
            livros[p]=novo;
            ultimo++;
            }
        }
    }else{
        printf("\nBiblioteca lotada");
    }
}

    void m2(Tlivro novo){ // Insere no final
        if (ultimo<5){
            livros[ultimo].cod = novo.cod;
            livros[ultimo].nome=novo.nome;
            ultimo++;
        }else{
            printf("\nBiblioteca lotada!!!");
        }
    }
    
    int m3(int codigo){
        int p=-1;
        for(int i=0;i<ultimo;i++){
            if(livros[i].cod==codigo){
                p=i;
                break;
            }
        }
        return p;
    }
    
    void m4(){ // Imprimir
    for(int i=0;i<ultimo;i++){
        printf("\nCodigo do livro: %d",livros[i].cod);
        printf("\nNome do livro: %s",livros[i].nome);
        }
    }

    void m5(Tlivro novo, int posicao){
        if(ultimo>=5){
        printf("Biblioteca lotada");
    }else{
        for(int i=ultimo;i>posicao;i--){
            livros[i].cod=livros[i-1].cod;
            livros[i].nome=livros[i-1].nome;
        }
        livros[posicao]=novo;
        ultimo++;
    }
}

main(){
    Tlivro novo;
    int valor;
    novo.cod=8;
    novo.nome='Aprendendo a programar em C';

    m2(novo);
    novo.cod=6;
    novo.nome='Fundamentos em Estrutura de Dados';

    m2(novo);
    novo.cod=10;
    novo.nome='Aprendendo a Programar em Python';

    m2(novo);

    novo.cod=4;
    novo.nome='Aprendendo Estrutura de Dados II';
    m5(novo,2);
    m4();
}

