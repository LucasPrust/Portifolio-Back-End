#include <stdio.h>
float temperatura[5];
int menu;
float temperaturaMaior;
int i;

void cadastrarTemperatura()
{
    for (i = 0; i < 5; i++)
    {
        printf("Qual a temperatura?\n");
        scanf("%f", &temperatura[i]);
    }
}

void exibirTemperatura()
{
    for (i = 0; i < 5; i++)
    {
        printf("a temperatura %i e %.lf\n", i, temperatura[i]);
    }
}

void maiorTemperatura()
{
    temperaturaMaior = temperatura[0];
    for (i = 0; i < 5; i++)
    {
        if (temperatura[i] > temperaturaMaior)
        {
            temperaturaMaior = temperatura[i];
        }
    }

    printf("a temperatura maior e %.lf\n",temperaturaMaior);
}

int main()
{
    do
    {
        printf("1.Cadastrar temperatura\n");
        printf("2.Exibir temperatura\n");
        printf("3.Exibir maior temperatura\n");
        printf("4.Sair\n");
        scanf("%i", &menu);

        switch (menu)
        {
        case 1:
            cadastrarTemperatura();
            break;

        case 2:
            exibirTemperatura();
            break;

        case 3:
            maiorTemperatura();
            break;
        }
    } while (menu != 4);
}