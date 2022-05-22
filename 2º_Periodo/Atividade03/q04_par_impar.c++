#include <iostream>
using namespace std;

int main(){

    int elementos;

    // Definindo vetor A
    cout<<"Quantidade de elementos do vetor A: ";
    cin>>elementos;

    int vetora[elementos];
    int vetorb[elementos];

    for(int i = 0; i < elementos; i++){
        cout<<"Posicao "<<i<<" no vetor A: ";
        cin>>vetora[i];

        // Verificação de par e impar
        if(vetora[i] % 2 == 0){
            vetorb[i] = 0;
        }else{
            vetorb[i] = 1;
        }
    }

    cout<<"Vetor B: [";
    for(int i = 0; i < elementos; i++){
        cout<<vetorb[i]<<",";
    }
    cout<<"]";
    
}