#include <iostream>
using namespace std;

int main(){

    int elementos,maior,menor;

    cout<<"Quantidade de elementos do vetor: ";
    cin>>elementos;

    int vetor[elementos];

    for(int i = 0; i < elementos; i++){
        cout<<"Elemento ["<<i<<"]";
        cin>>vetor[i];
    }

    maior = 0;
    menor = 0;

    for(int i = 0; i < elementos; i++){
        if(vetor[i] > vetor[maior]){
            maior = i;
        }
        if(vetor[i] < vetor[menor]){
            menor = i;
        }
    }

    cout<<vetor[maior]<<" Eh o maior numero e "<<vetor[menor]<<" eh o menor numero";
}