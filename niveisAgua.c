#include <stdio.h>
float armazenarNiveis[7];
int menu;
float menor;
int i;

void cadastrarNivel()
{
    for (i = 0; i < 7; i++)
    {
        printf("Qual o Nivel da agua?\n");
        scanf("%f", &armazenarNiveis[i]);
    }
}

void exibirNivel()
{
    for (i = 0; i < 7; i++)
    {
        printf("o nivel de temperatura %i e %.lf\n", i, armazenarNiveis[i]);
    }
}

void menorNivel()
{
    menor = armazenarNiveis[0];
    for (i = 0; i < 7; i++)
    {
        if (armazenarNiveis[i] < menor)
        {
            menor = armazenarNiveis[i];
        }
    }
    printf("o nivel menor e %.lf\n", menor);
}

int main()
{
    do
    {
        printf("1.Cadastrar Nivel\n");
        printf("2.Exibir Niveis cadastrado\n");
        printf("3.Exibir menor Nivel cadastrado\n");
        printf("4.Sair\n");
        scanf("%i",&menu);

        switch (menu)
        {
        case 1:
            cadastrarNivel();
            break;

        case 2:
            exibirNivel();
            break;

        case 3:
            menorNivel();
            break;
        }
    } while (menu != 4);
}