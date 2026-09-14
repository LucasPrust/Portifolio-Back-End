#include <stdio.h>
int main()
{
    int quantidade[10];
    char produto[10][50];
    int op;
    int var = 0;
    int i;
    do
    {
        printf("1. Adicionar e Exibir Produto\n");
        printf("2.Adicionar e Exibir Quantidade\n");
        printf("3.Sair\n");
        scanf("%i", &op);

            switch (op)
            {
            case 1:
                if (var < 10)
                {
                    printf("Qual Produto voce quer adicionar?\n");
                    scanf("%s", &produto[var]);

                    printf("Qual Quantidade voce quer adicionar?\n");
                    scanf("%i", &quantidade[var]);

                    var++;
                }
                else
                {
                    printf("Espaco cheio\n");
                }
                break;

            case 2:
                for (i = 0; i < var; i++)
                {
                    printf("O Produto e %s e a Quantidade e %i\n", produto[i], quantidade[i]);
                }
                break;

                case 3:
                printf("Encerrado\n");
                break;

                default:
                printf("Esta opcao nao existe\n");
            }
        }
        while(op!=3);
    }