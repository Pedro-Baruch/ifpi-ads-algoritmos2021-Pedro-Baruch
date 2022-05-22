#include <iostream>
#include <string.h>
using namespace std;

int main(){

    int na,nb,nc;

    // Lendo os valores presentes no vetor A
    cout<<"[--------Vetor A--------]"<<endl;

    cout<<"Quantidade de elementos do vetor A: ";
    cin>>na;

    int vetora[na];

    for(int i = 0; i < na; i++){
        cout<<"Posicao "<<i<<" do vetor A: ";
        cin>>vetora[i];
    }
    
    // Lendo os valores presentes no vetor B
    cout<<"[--------Vetor B--------]"<<endl;

    cout<<"Quantidade de elementos do vetor B: ";
    cin>>nb;

    int vetorb[nb];

    for(int i = 0; i < nb; i++){
        cout<<"Posicao "<<i<<" do vetor B: ";
        cin>>vetorb[i];
    }
}