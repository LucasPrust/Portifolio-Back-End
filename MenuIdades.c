#include <stdio.h>
int main()
{
    int op;
    int idade[5];
    do
    {
        printf("1.Salvar idades\n\n");
        printf("2.Exibir idades\n\n");
        printf("3.Sair\n\n");
        scanf("%i", &op);
        switch (op)
        {
        case 1:
            printf("Qual sua idade?\n\n");
            scanf("%i", &idade[0]);
            scanf("%i", &idade[1]);
            scanf("%i", &idade[2]);
            scanf("%i", &idade[3]);
            scanf("%i", &idade[4]);
            break;
        case 2:
            printf("a sua idade 0 foi: %i\n\n", idade[0]);
            printf("a sua idade 1 foi: %i\n\n", idade[1]);
            printf("a sua idade 2 foi: %i\n\n", idade[2]);
            printf("a sua idade 3 foi: %i\n\n", idade[3]);
            printf("a sua idade 4 foi: %i\n\n", idade[4]);
            break;
        case 3:
            printf("Encerrado");
            break;
        default:
            printf("Esta opcao nao existe");
        }
    } while (op != 3);
}