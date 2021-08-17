#include <stdio.h>

main()
{
    int num,centena,dezena,unidade,soma;

    // Entrada
    printf("Insira um valor de 3 digitos: ");
    scanf("%i", &num);

    // Processamento
    
    unidade = num % 10;
    dezena = ((num - unidade) / 10) % 10;
    centena = (((num - unidade) / 10) - dezena) / 10;

    soma = unidade + dezena + centena;

    // Saída
    printf("A soma dos numeros eh igual a: %i", soma);
}