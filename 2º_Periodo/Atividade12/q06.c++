#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

class No{
    public:
        float num;
        No *prox;
        No(float n){
            num = n;
            prox = NULL;
        }
};

class Pilha{
	public:
		No *topo;
		
		Pilha(){
			topo = NULL;
		}
		
		void push(float n){
			No *novo = new No(n);

			if(topo == NULL){
				topo = novo;
			}else{
				novo->num = n;
				novo->prox = topo;
				topo = novo;
			}			
		}
		
		float pop(){
			float n;

			n = topo->num;
			topo = topo->prox;
			
			return n;
		}
		
		int isEmpty(){
			
			if(topo != NULL){
				cout<<"Pilha nao vazia"<<endl;
				return 1;
			}else{
				cout<<"Pilha vazia"<<endl;
				return 0;
			}
		}

		void imprimir(){
			No *i = topo;

			while(i != NULL){
				cout<<i->num<<endl;
				i = i->prox;
			}
		}

};

main(){
    
    Pilha *p = new Pilha();

    p->push(3);
    p->push(2);
    p->push(1);

    p->imprimir();
}