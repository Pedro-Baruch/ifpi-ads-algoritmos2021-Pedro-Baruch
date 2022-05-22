#include <iostream>

using namespace std;

int main(){
    
    int elementos;

    // Definindo vetor A
    cout<<"Digite o numero de elemento do vetor A: ";
    cin>>elementos;

    int vetora[elementos];
    int vetorb[elementos];

    for(int i = 0; i < elementos; i++){
        cout<<"Posicao "<< i <<" do vetor a: ";
        cin>>vetora[i];
    }
    
    // Invertendo o vetor A
    int j = elementos;
    for(int i = 0; i < elementos; i++){
        j--;
        vetorb[j] = vetora[i];
    }

    cout<<"Vetor B: [";
    for(int i = 0; i < elementos; i++){
        cout<<vetorb[i]<<",";
    }
    cout<<"]"<<endl;
}