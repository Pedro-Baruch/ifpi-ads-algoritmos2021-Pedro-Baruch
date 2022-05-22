#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

//lista DUPLAMENTE ENCADEADA - ELEMENTO NO COM 2 PONTEIROS, UM PARA O ELEMENTO ANTERIOR E OUTRO PARA O PROX ELEMENTO
class No{
	public:
		int mat;
		char nome[23];
		No *prox;
		No *ant;
		No(int m,char n[23]){
			mat=m;
			strcpy(nome,n);
			prox=NULL;
			ant=NULL;
		}
};


class Lista{
	public:
		No *inicio;
		No *fim;
	
		//construtor
	    Lista(){
	    	inicio = NULL;
	    	fim = NULL;
		}	
		
		//adiciona no final da lista
		void addToFinal(int m, char n[23]){
			No *novo= new No(m,n);
			if (fim==NULL){
				inicio = novo;
				fim = novo;
			}
			else{
				fim->prox=novo;
				novo->ant=fim;
				fim=novo;
			}
		}
		
		//adiciona no inicio da lista
		void addToIni(int m, char n[23]){
			
			No *novoElemento = new No(m,n);

			novoElemento->prox = NULL;
			novoElemento->ant = NULL;

			if(inicio == NULL){
				inicio = novoElemento;
				fim = novoElemento;
			}else{
				inicio->ant = novoElemento;
				novoElemento->prox = inicio;
				inicio = novoElemento;
			}
		}
		
		//adiciona o elemento na lista ordenada
		//void addOrd(int m, char n[23]){
   			
	
		//}
		
		// mostrar os elementos do inicio ao final da lista
		void mostraIniFim(){
			
			No *i = inicio;

			while(i != NULL){
				cout<<i->mat<<" - "<<i->nome<<endl;
				i = i->prox;
			}	
		}
		
		//mostrar os elementos do final ao inicio da lista
		void mostraFimIni(){

			No *f = fim;

			while(f != NULL){
				cout<<f->mat<<" - "<<f->nome<<endl;
				f = f->ant;
			}	
		}
		
		//remove o elemento do final da lista
		//int removerFinal(){
			
			
		//}
		
		//remove o elemento do inicio da lista
		//int removerInicio(){

		//}
		
		//remove o elemento procurado , o valor procurado � passado como parametro m
		int remover(int m){
			
			No *i = inicio;
			No *remover = NULL;

			if(i != NULL && inicio->mat == m){
				remover = inicio;
				inicio = remover->prox;
			}else{
				while(i != NULL && i->prox != NULL && i->prox->mat != m){
					i = i->prox;
				}
				if(i != NULL && i->prox != NULL){
					remover = i->prox;
					i->prox = remover->prox;
				}
			}

			if(remover != NULL){
				free(remover);
			}		
		}
};
main(){
   	Lista *l=new Lista(); 

	l->addToFinal(2,'Pedro');
	l->addToFinal(3,'Lucas');
	l->addToIni(1,'Maria');
	l->addToIni(4,'Julia');

	l->mostraIniFim();
	l->mostraFimIni();
	
	l->remover(1);

	l->mostraIniFim();

   //fa�a aqui o teste de todos os m�todos da classe
	
}
