#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

class No{
	public:
		char nome;
		No *prox;
		No(char n){
			nome = n;
			prox = NULL;
		}
};

class Pilha{
	public:
		No *topo;
		
		Pilha(){
			topo = NULL;
		}
		
		//INCLUIR UM ELEMENTO NA PILHA
		void push(char n){
			No *novo = new No(n);

			if(topo == NULL){
				topo = novo;
			}else{
				novo->nome = n;
				novo->prox = topo;
				topo = novo;
			}			
		}
		
		//APAGAR UM ELEMENTO DA PILHA E RETORNAR O ELEMENTO APAGADO
		char pop(){
			char n;

			n = topo->nome;
			topo = topo->prox;
			
			return n;
		}
		
		//VERIFICAR SE A PILHA ESTÁ VAZIA , RETORNAR 0 SE PILHA VAZIA
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
				cout<<i->nome<<endl;
				i = i->prox;
			}
		}
	
};

int main(){
	
	Pilha *p = new Pilha();
	int i;
	char n;

	p->push('3');
	p->push('2');
	p->push('1');

	i = p->isEmpty();
	
	n = p->pop();
	cout<<n<<" - Foi retirado"<<endl;

	if(i == 1){
		p->imprimir();
	}

	
}
