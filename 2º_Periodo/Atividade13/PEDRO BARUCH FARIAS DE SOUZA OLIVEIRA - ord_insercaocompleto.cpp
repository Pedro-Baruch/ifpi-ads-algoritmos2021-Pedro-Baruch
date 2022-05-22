#include <stdio.h>
#include <iostream>
#include <array>

using namespace std;
	
void ord_insercao(int v[],int tam){

	int i,indice,copia;

	for(i = 1; i < 5; i++){
		copia = v[i];
		indice = i;

		while(indice > 0 && v[indice - 1] > copia){
			v[indice] = v[indice - 1];
			indice--;
		}

		v[indice] = copia;
	}
} 

main(){
	
	int array[5]={10,5,6,1,3};
	
	ord_insercao(array,5);

	for(int i = 0; i < 5; i++){
		cout<<array[i]<<endl;
	}

	//#Defina o algoritmo de ordena��o por inser��o
	//#Mostre o vetor ordenado
	//#Chame o algoritmo ord_insercao ordenando o vetor myarray
}

