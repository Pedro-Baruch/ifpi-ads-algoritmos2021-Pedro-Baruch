#include<stdio.h>
#include<iostream>
using namespace std;
void Quick(int vetor[12], int inicio, int fim);
void PesquisaBinaria(int n, int *v, int procurado);
int main(){
   
   #ordene o vetor usando o quicksort
   #mostre o vetor ordenado
   #pesquise no vetor usando o metodo de pesquisa binaria
   
   int vetor[12] = {1, 4,3, 9,10,50,13,20,25,67,87,100};
   
   Quick(vetor,1,100);

   for(int i = 0; i < 5; i++){
		cout<<vetor[i]<<endl;
	}
}

void Quick(int vetor[12], int inicio, int fim){
   
   int pivo, aux, i, j, meio;

   i = inicio;
   j = fim;

   meio = (int) ((i + j) / 2);
   pivo = vetor[meio];

   do{
      while(vetor[i] < pivo) i = i + 1;
      while(vetor[j] > pivo) j = j - 1;

      if(i <= j){
         aux = vetor[i];
         vetor[i] = vetor[j];
         vetor[j] = aux;
         i = j + 1;
         j = j - 1;
      }
   }while(j > i);

   if(inicio < j){
      Quick(vetor, inicio, j);
   }

   if(i < fim){
      Quick(vetor, i, fim);
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

