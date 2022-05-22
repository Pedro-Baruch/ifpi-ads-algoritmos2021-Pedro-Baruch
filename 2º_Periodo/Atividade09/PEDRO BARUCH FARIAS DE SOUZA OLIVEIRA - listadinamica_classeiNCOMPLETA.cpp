#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

class No{
	public:
		int mat;
		char nome[23];
		No *prox;
		No(int m,char n[23]){
			mat=m;
			strcpy(nome,n);			
			prox=NULL
		}
};

class Lista{
	public:
		No *inicio;
		No *fim;
	
	    Lista(){
	    	inicio = NULL;
	    	fim = NULL;
		}	
		
		void addToFinal(int m, char n[23]){
			No *novo= new No(m,n);
			if (fim==NULL){
				inicio = novo;
				fim = novo;
			}
			else{
				fim->prox=novo;
				fim=novo;
			}
		}
		
			
		int lst_vazia(){
			return (inicio==NULL);
		}
		
		void addToInicio(int m,char n[23]){
			No *novo = (No*)malloc(sizeof(No));

			novo->mat = m;
			strcpy(novo->nome,n);

			novo->prox=inicio;
		}

		void mostra(){
				if (lst_vazia()){
					cout<<"\nLista vazia!!!";
				}
				else{	
					while(inicio !=NULL){
						cout<<inicio->mat<<" - "<<inicio->nome<<endl;
						inicio = inicio->prox;
					}
				}
			}			
		}
		
		int remove(int m){
			No *i = inicio;
    		No *noRemover = NULL;

    		if(i != NULL && inicio->mat == m){
        		noRemover = inicio;
        		inicio = noRemover->prox;
    		}else{
        		while(i != NULL && i->prox != NULL && i->prox->mat != m){
            		i = i->prox;
        	}

        	if(i != NULL && i->prox != NULL){
            	noRemover = i->prox;
            	i->prox = noRemover->prox;
        	}
    	}

    	if(noRemover){
        	free(noRemover);
    	}
		}
		
		// auxiliar no metodo remove, vai 
		//retornar o endereco do anterior
		No *busca(int m){
			
			bool achou = false;
			No *i = inicio;

			while(inicio != NULL){
				if(inicio->mat == m){
					achou = true;
					return i->valor;
				}
				i = i->prox;
			}

			if(achou == false){
				return -1;
			}

		}
		
		void removeTodos(){
			No *atual=inicio;
			No *proximo=NULL;
			while (atual!=NULL){
					proximo=atual->prox;
					cout<<"\n Apaga:"<<atual->nome;
					free(atual);
					atual=proximo;						
			}
			inicio=atual;
		}
		
		// criar uma nova lista que seja o inverso da primeira
		/*void crialistainversa(){
				
		}
		
		//inverter a propria lista
		void listainvertida(){
				
		}*/
};
main(){
   	Lista *l=new Lista();
   	
	l->addToFinal(1,'Joao');
   	l->addToFinal(2,'Gabriela');
   	l->addToFinal(3,'Fabiola');
   	l->addToInicio(5,'Joana Oliveira');
   	l->addToInicio(6,'Cristiano Oliveira');
	l->mostra();
 
  	l->listainvertida();
  	l->mostra();

   

}
