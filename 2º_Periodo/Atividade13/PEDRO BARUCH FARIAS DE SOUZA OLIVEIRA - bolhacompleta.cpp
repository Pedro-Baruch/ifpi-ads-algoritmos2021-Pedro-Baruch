#include <stdio.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

void bolha (int n,int* v) {

	int troca;

	for(int i = n-1; i > 1; i--){
		troca = 0;
		for(int j = 0; j < i; j++){
			if(v[j] > v[j+1]){
				int temp = v[j];
				v[j] = v[j+1];
				v[j+1] = temp;
				troca = 1;
			}
		}

		if(troca == 0){
			break;
		}
	}
	 
}

void PesquisaBinaria(int n, int *v, int procurado){

	int ini = 0;
	int fim = n-1;

	while(ini <= fim){
		while (ini <= fim){
			int meio = (ini + fim) / 2;
			if (procurado < v[meio])
				fim = meio - 1;
			else if(procurado > v[meio])
				ini = meio + 1;
		}			
	}

}
	 
main(){
	int v[4];
	
	for(int i = 0 ; i <= 3 ; i++){
		printf("Digite o valor %d :",i);
		scanf("%d",&v[i]);
	}

	bolha(4,v);
	//PesquisaBinaria(4,v,2);

	for(int i = 0 ; i <= 3 ; i++){
		cout<<v[i]<<endl;;
	}

	/*#ordene o vetor V usando o m�todo da bolha	
    #mostre o vetor ordenado
    #pesquise no vetor usando o metodo de pesquisa binaria*/
		
}
