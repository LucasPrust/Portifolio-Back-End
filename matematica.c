#include <stdio.h>
int main(){
int soma,subtracao,multi;
int n1;
int n2;
float divisao;
    printf("Qual o valor de n1?\n");
    scanf("%i", &n1);
    printf("Qual o valor de n2?\n");
    scanf("%i",&n2);
    soma = n1 + n2;
    printf("A Soma deu %i\n",soma);
    subtracao = n1 - n2;
    printf("A Subtracao deu %i\n",subtracao);
    multi = n1 * n2;
    printf("A Multiplicacao deu %i\n",multi);
    divisao = (float)n1/n2;
    printf("A Divisao deu %f",divisao);
}