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

class Fila{
	public:
		No *inicio;
		No *fim;
		
		Fila(){
			inicio = NULL;
			fim = NULL;
		}
		
		void append(char n){
			No *novo= new No(n);
			
			if (fim==NULL){
				inicio = novo;
				fim = novo;
			}
			else{
				fim->prox=novo;
				fim=novo;
			}
		}
		
		char pop(){
			char n;

			n = inicio->nome;
			inicio = inicio->prox;

			return n;
		}
		
		bool isEmpty(){
			
			bool vazio;

			if(inicio == NULL){
				cout<<"Lista vazia"<<endl;
				vazio == true;
			}else{
				cout<<"Lista nao vazia"<<endl;
				vazio == false;
			}

			return vazio;
		}
	
	    void popAll(){
	    	
			while(inicio != NULL){
				inicio = inicio->prox;
			}
		}

		void imprimir(){
			No *i = inicio;

			while(i != NULL){
				cout<<i->nome<<endl;
				i = i->prox;
			}
		}

};

/*int main(){
	Fila *f = new Fila();
	bool i;
	char n;

	f->append('a');
	f->append('b');
	f->append('c');
	
	//n = f->pop();
	//cout<<n<<" - Foi Retirado"<<endl;
	
	//f->popAll();
	
	i = f->isEmpty();
	
	if(i == false){
		f->imprimir();
	}else{
		return NULL;
	}
	
}*/

int main(){

	Fila *onze = new Fila();
	Fila *doze = new Fila();
	int resp;
	char letra;

	do{
		cout<<"\nDigite a Letra: ";
		cin>>letra;

	 	bool vf = onze->isEmpty();

		if(vf==true){
			onze->append(letra);
		}else{
			while(onze->isEmpty()==false){
				doze->append(onze->pop());
			}

			onze->append(letra);

			while(doze->isEmpty()==false){
				onze->append(doze->pop());
			}
		}

		cout<<"\nDeseja continuar (1 - sim 2 - nao)";
		cin>>resp;
	}while(resp==1);{
		onze->imprimir();
	}

	
}
