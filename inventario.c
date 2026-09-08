#include <stdio.h>
int main()
{
    int quantidade[10]; 
    char produto[10][50];
    int var = 0;
    int op;

    do
    {
        printf("1.Exibir Produto\n");
        printf("1.Adicionar Produto\n");
        printf("2.Exibir Quantidade\n");
        printf("2.Adicionar Quantidade\n");
        printf("3.Sair\n");
        scanf("%i", &op);

        switch (op)
        {
        case 1:
            if (var < 10)
            {
                printf("Qual produto vc quer adicionar?\n");
                scanf("%s", produto[var]);

                printf("Qual a quantidade vc quer adicionar?\n");
                scanf("%i", &quantidade[var]);

                var++;
            }
            else
            {
                printf("espaco cheio\n");
            }
            break;

        case 2:
            printf("O Produto 1 foi: %s\n", produto[0]);
            printf("O Produto 2 foi: %s\n", produto[1]);
            printf("O Produto 3 foi: %s\n", produto[2]);
            printf("O Produto 4 foi: %s\n", produto[3]);
            printf("O Produto 5 foi: %s\n", produto[4]);
            printf("O Produto 6 foi: %s\n", produto[5]);
            printf("O Produto 7 foi: %s\n", produto[6]);
            printf("O Produto 8 foi: %s\n", produto[7]);
            printf("O Produto 9 foi: %s\n", produto[8]);
            printf("O Produto 10 foi: %s\n", produto[9]);


            printf("A Quantidade do Produto 1 foi: %i\n", quantidade[0]);
            printf("A Quantidade do Produto 2 foi: %i\n", quantidade[1]);
            printf("A Quantidade do Produto 3 foi: %i\n", quantidade[2]);
            printf("A Quantidade do Produto 4 foi: %i\n", quantidade[3]);
            printf("A Quantidade do Produto 5 foi: %i\n", quantidade[4]);
            printf("A Quantidade do Produto 6 foi: %i\n", quantidade[5]);
            printf("A Quantidade do Produto 7 foi: %i\n", quantidade[6]);
            printf("A Quantidade do Produto 8 foi: %i\n", quantidade[7]);
            printf("A Quantidade do Produto 9 foi: %i\n", quantidade[8]);
            printf("A Quantidade do Produto 10 foi: %i\n", quantidade[9]);

            break;

        case 3:
            printf("Encerrado\n");

            break;

        default:
            printf("opcao invalida\n");
        }
    } while (op != 3);
}
