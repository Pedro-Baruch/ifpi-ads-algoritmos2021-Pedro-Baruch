#include <iostream>
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

    // Definindo vetor C

    nc = na + nb;
    int vetorc[nc];

    // Junção dos vetores

    for(int i = 0; i < na; i++){ // Vetorc C fica igual vetor A
        vetorc[i] = vetora[i];
    }

    int j = 0;
    for(int i = na; i < nc; i++){ // Continua inserindo os números a partir da contagem anterior
        vetorc[i] = vetorb[j];
        cout<<j<<" ";
        j++;
    }

    cout<<endl;

    // Saída
    cout<<"Vetor C: [";
    for(int i = 0; i < nc; i++){
        cout<<vetorc[i]<<",";
    }
    cout<<"]";
}