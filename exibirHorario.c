#include <stdio.h>
int main()
{
    int opcao;
    char horario[50];
    do
    {
        printf("1.Cadastrar horario\n");
        printf("2.Exibir horario cadastrado\n");
        scanf("%i", &opcao);
        switch (opcao)
        {
        case 1:
            printf("Digite a Hora\n");
            scanf("%s", &horario);
            break;
        case 2:
            printf("A Hora foi %s\n", horario);
            break;
        }
    } while (opcao != 3);
}