#include <iostream>
using namespace std;

int main(){

    int num,termo1,termo2,termo3;

    cout<<"Quantidade de termos: ";
    cin>>num;

    int vetor[num];

    termo1 = 0;
    termo2 = 1;
    termo3 = 0;

    vetor[0] = termo1;
    vetor[1] = termo2;

    for(int i = 2; i <= num; i++){
        termo3 = termo1 + termo2;
        vetor[i] = termo3;
        termo1 = termo2;
        termo2 = termo3;
    }

    for(int i = 0; i < num; i++){
        cout<<vetor[i]<<" ";
    }
}