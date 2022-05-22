#include <stdio.h>
#include <iostream>

#define fmt "%d"

using namespace std;

typedef int Item;

typedef struct no {
	Item item;
	struct no *prox;	
}*Lista; 



Lista inclue(Item x, Lista p){
	Lista n = (Lista)malloc(sizeof(Lista));
	n->item = x;
	n->prox = p;
	return n;
}

void exibe(Lista L){
	while (L!=NULL){
		cout<<L->item<<endl;
		L=L->prox;
	}
	cout<<"---------------------"<<endl;
	
}


//versao passando o parametro Lista A diretamente 
void anexa1(Lista A, Lista B){
	if (B==NULL) return;
	while (A->prox!=NULL) 	    
	    A=A->prox;
	A->prox=B;
}

// a versao do livro est� assim: passando o parametro Lista INdiremente (endere�o para endere�o) 
void anexa0(Lista *A, Lista B){
	if (B==NULL) return;
	while (*A!=NULL) 
	    A = &(*A)->prox;	    
	*A=B;
}


// a versao do livro est� assim: passando o parametro Lista INdiremente (endere�o para endere�o) 
void destroi(Lista *L){	
    exibe(*L);
	while (*L !=NULL){
		Lista n = *L;
		*L = n->prox;
		free(n);
		exibe(*L);		
	}    
}

//versao passando o parametro Lista L diretamente 
void destroi1(Lista L){
	exibe(L);
	while (L!=NULL){
		Lista n = L;
		L = n->prox;
		free(n);
		exibe(L);
	}    
}


main(){	
	Lista H = inclue(4,inclue(2,NULL));
	exibe(H);
	Lista I = inclue(3,inclue(1,inclue(5,NULL)));
	exibe(I);
	anexa0(&H,I);  // observe que aqui ele passa o endereco do endereco (&H)
	exibe(H);
}
	
/*main(){	

	Lista L = inclue(40,inclue(20,NULL));
	exibe(L);
	Lista M = inclue(30,inclue(10,inclue(50,NULL)));
	exibe(M);
	anexa1(L,M);  //observe que aqui ele passa o endere�o L diretamente
	exibe(L);
	destroi(&L);
    destroi1(L);	
}*/

	
	
	
	
	
	
	


